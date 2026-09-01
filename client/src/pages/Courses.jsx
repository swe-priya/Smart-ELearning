// Courses.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import "./Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [course, setCourse] = useState({
    title: "",
    instructor: "",
    category: "",
    duration: "",
    description: ""
  });

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5000/api/courses");
      setCourses(res.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value
    });
  };

  const addCourse = async () => {
    if (!course.title || !course.instructor || !course.category) {
      alert("Please fill all required fields");
      return;
    }
    await axios.post("http://localhost:5000/api/courses/add", course);
    alert("Course Added Successfully");
    getCourses();
    setCourse({
      title: "",
      instructor: "",
      category: "",
      duration: "",
      description: ""
    });
  };

  const deleteCourse = async (id) => {
    const confirmDelete = window.confirm("Delete this course?");
    if (confirmDelete) {
      await axios.delete(`http://localhost:5000/api/courses/delete/${id}`);
      getCourses();
    }
  };

  const updateCourse = async (id) => {
    const newTitle = prompt("Enter updated course title");
    if (newTitle) {
      await axios.put(`http://localhost:5000/api/courses/update/${id}`, {
        title: newTitle
      });
      getCourses();
    }
  };

  // Helper for initials
  const getInitials = (str) => {
    if (!str) return "CS";
    return str
      .split(" ")
      .map(w => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();
  };

  const filteredCourses = courses.filter((c) => {
    const matchesSearch = c.title?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === "All" || c.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="coursePage">
      {/* Page Header */}
      <div className="header">
        <h1>Smart E-Learning Courses</h1>
        <p>Explore, manage, and enroll in industry-vetted tech courses</p>
      </div>

      {/* Filter and Search Bar */}
      <div className="filter-bar-card">
        <div className="search-input-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search courses by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="category-select-box">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="All">All Categories</option>
            <option value="Web Development">Web Development</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Database">Database</option>
            <option value="AI & Data Science">AI & Data Science</option>
          </select>
        </div>
      </div>

      {/* Add New Course Card */}
      <div className="courseForm">
        <h2>+ Add New Course</h2>
        <div className="form-grid">
          <input
            name="title"
            placeholder="Course Title *"
            value={course.title}
            onChange={handleChange}
          />
          <input
            name="instructor"
            placeholder="Instructor Name *"
            value={course.instructor}
            onChange={handleChange}
          />
          <input
            name="category"
            placeholder="Course Category (e.g. Web Development) *"
            value={course.category}
            onChange={handleChange}
          />
          <input
            name="duration"
            placeholder="Course Duration (e.g. 12h 30m)"
            value={course.duration}
            onChange={handleChange}
          />
        </div>
        <textarea
          name="description"
          placeholder="Course Description"
          value={course.description}
          onChange={handleChange}
        />
        <button className="addBtn" onClick={addCourse}>
          Add Course
        </button>
      </div>

      {/* Course Grid */}
      <h2 className="available">Available Courses</h2>

      {loading ? (
        <h3 className="loading">Loading Courses...</h3>
      ) : (
        <div className="courseContainer">
          {filteredCourses.map((item) => (
            <div className="courseCard" key={item._id}>
              {/* Initials Header Block */}
              <div className="cardIconBlock">
                <span className="initials-text">{getInitials(item.title)}</span>
              </div>

              <div className="cardBody">
                <div className="card-top-row">
                  <span className="category-pill">{item.category || "General"}</span>
                  <div className="actions">
                    <button
                      className="editBtn"
                      title="Edit"
                      onClick={() => updateCourse(item._id)}
                    >
                      ✏️
                    </button>
                    <button
                      className="deleteBtn"
                      title="Delete"
                      onClick={() => deleteCourse(item._id)}
                    >
                      🗑
                    </button>
                  </div>
                </div>

                <h2>{item.title}</h2>

                <div className="details">
                  <p><span>Instructor:</span> {item.instructor}</p>
                  <p><span>Duration:</span> {item.duration || "Self-paced"}</p>
                </div>

                <p className="description">{item.description}</p>

                <button
                  className="enroll-btn"
                  onClick={() => alert(`Enrolled in ${item.title}!`)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Courses;