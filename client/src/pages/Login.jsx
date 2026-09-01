import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
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
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        user
      );

      // Save login information
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful!");

      navigate("/dashboard");

    } catch (error) {
      alert(
        error.response?.data?.error ||
        "Invalid email or password"
      );
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">

          <div className="login-logo">
            🎓
          </div>

          <h1>Welcome Back</h1>

          <p>
            Login to Smart E-Learning Platform
          </p>

        </div>

        <form onSubmit={handleSubmit}>

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
              placeholder="Enter your password"
              required
            />

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            Login
          </button>

        </form>

        <div className="signup-link">

          Don't have an account?

          <Link to="/signup">
            Create Account
          </Link>

        </div>

      </div>

    </div>
  );
}

export default Login;