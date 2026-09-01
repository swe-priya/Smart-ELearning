import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/signup",
        user
      );

      alert("Account created successfully!");

      navigate("/");

    } catch (error) {
      alert(
        error.response?.data?.error ||
        "Signup failed"
      );
    }
  };

  return (
    <div className="signup-page">

      <div className="signup-card">

        <div className="signup-header">
          <div className="signup-logo">🎓</div>

          <h1>Create Account</h1>

          <p>
            Join Smart E-Learning Platform
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Create a password"
              required
              minLength="6"
            />
          </div>

          <button
            type="submit"
            className="signup-btn"
          >
            Create Account
          </button>

        </form>

        <div className="login-link">
          Already have an account?

          <Link to="/login">
            Login
          </Link>
        </div>

      </div>

    </div>
  );
}

export default Signup;