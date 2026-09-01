const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Local Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/smarteelearning")
  .then(() => console.log("MongoDB Database Connected"))
  .catch((err) => console.log("MongoDB connection notice:", err.message));

  // User Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  password: String
});

const User = mongoose.model("User", userSchema);

// Signup API
app.post("/api/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        error: "Email already registered"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    await newUser.save();

    res.json({
      message: "Account created successfully"
    });

  } catch (error) {
    res.status(500).json({
      error: "Signup failed"
    });
  }
});

// Login API
app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        error: "Invalid email or password"
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!passwordMatch) {
      return res.status(401).json({
        error: "Invalid email or password"
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email
      },
      "smart-elearning-secret",
      {
        expiresIn: "1d"
      }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({
      error: "Login failed"
    });
  }
});

// Course Schema
const courseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  category: String,
  duration: String,
  description: String,
});
const Course = mongoose.model("Course", courseSchema);

// Course API Endpoints
app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch courses" });
  }
});

app.post("/api/courses/add", async (req, res) => {
  try {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.json({ message: "Course added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add course" });
  }
});

app.put("/api/courses/update/:id", async (req, res) => {
  try {
    await Course.findByIdAndUpdate(req.params.id, { title: req.body.title });
    res.json({ message: "Course updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update course" });
  }
});

app.delete("/api/courses/delete/:id", async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete course" });
  }
});

// AI Tutor API Endpoint
// AI Tutor API Endpoint
app.post("/api/ai/chat", (req, res) => {
  const { message } = req.body;

  const topic = message.toLowerCase();

  let reply = "";

  if (topic.includes("mern")) {
    reply = `## MERN Stack

MERN stands for **MongoDB, Express.js, React.js, and Node.js**.

### 1. MongoDB
MongoDB is a **NoSQL database** used to store application data.

### 2. Express.js
Express.js is a **backend web framework** used with Node.js to create APIs and handle requests.

### 3. React.js
React.js is a **JavaScript library** used to build the frontend and user interface.

### 4. Node.js
Node.js is a **JavaScript runtime** that allows JavaScript to run on the server.

### How they work together
React handles the frontend.  
Node.js and Express.js handle the backend.  
MongoDB stores the data.

**Example:** In an e-learning website, React displays courses, Express and Node handle course requests, and MongoDB stores course information.

### Simple flow
**React → Express/Node → MongoDB**

This is why MERN is popular for building full-stack web applications.`;
  }

  else if (topic.includes("mongodb")) {
    reply = `## MongoDB

MongoDB is a **NoSQL database**.

Instead of storing data in rows and columns like traditional SQL databases, MongoDB stores data in **documents**.

### Main features

- Stores data in JSON-like documents
- Flexible database structure
- Easy to use with Node.js
- Suitable for modern web applications
- Can handle large amounts of data

### Example

A student document can contain:

- Name
- Email
- Course
- Marks

MongoDB stores this information as a document inside a collection.

### In a MERN application

**React → Express/Node → MongoDB**

React sends the request, the backend processes it, and MongoDB stores or retrieves the data.`;
  }

  else if (topic.includes("react")) {
    reply = `## React.js

React is a **JavaScript library** used to build user interfaces.

### Important concepts

**Components:**  
React applications are divided into reusable components.

**Props:**  
Props are used to pass data from one component to another.

**State:**  
State stores data that can change inside a component.

**Hooks:**  
Hooks such as \`useState\` and \`useEffect\` help manage state and other features.

### Example

A course website can have separate components for:

- Navbar
- Course Card
- Login
- Quiz
- AI Tutor

This makes the application easier to develop and maintain.`;
  }

  else if (topic.includes("aws")) {
    reply = `## AWS Cloud

AWS stands for **Amazon Web Services**.

It provides cloud services that can be used to host and run applications.

### Common AWS services

**EC2:** Used to run applications on virtual servers.

**S3:** Used to store files and objects.

**RDS:** Used for managed relational databases.

**CloudFront:** Used to deliver content quickly.

### Example

For an e-learning application, the frontend can be hosted online, the backend can run on a cloud server, and files can be stored using cloud storage.

### Benefit

AWS allows applications to be hosted and accessed from anywhere without maintaining physical servers.`;
  }

  else if (topic.includes("javascript") || topic.includes("java")) {
    reply = `## ${message}

This is a programming-related topic.

### Basic idea

Programming means giving instructions to a computer to perform a task.

### Important concepts

- Variables store data.
- Functions contain reusable code.
- Conditions make decisions.
- Loops repeat instructions.
- Objects store related data.

### Example

A simple program can take a student's mark and check whether the student passed or failed.

### Why it is useful

Programming is used to create websites, mobile applications, desktop applications, backend systems, and many other software applications.

If you are learning this topic, start with the basic syntax and then practice small programs.`;
  }

  else {
    reply = `## AI Tutor Response

You asked: **${message}**

Here is a simple explanation.

### Concept

This topic can be understood by first learning its basic definition and purpose.

### Important points

1. Understand the basic concept.
2. Learn the important terms related to it.
3. Practice a simple example.
4. Try implementing it in a small program.
5. Test the result and fix any errors.

### Example

Try connecting this concept with a small real-world application. For example, an e-learning platform can use programming, databases, APIs, and cloud services together.

### Next Step

If you want, ask me a more specific question about this topic and I can explain it with **examples, code, advantages, disadvantages, and interview questions**.`;
  }

  res.json({ reply });
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});