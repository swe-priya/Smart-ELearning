// Home.jsx
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-wrapper">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-brand">
          <span className="brand-logo-icon">✦</span>
          <h2>Smart E-Learning Platform</h2>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/courses" className="nav-link">Courses</Link>
          <Link to="/aitutor" className="nav-link">AI Tutor</Link>
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
          <Link to="/quiz" className="nav-link">Quiz</Link>
          <Link to="/certificate" className="nav-link">Certificate</Link>
          <Link to="/login">
            <button className="nav-login-btn">Login</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Learn Smarter with AI</h1>
          <p className="hero-subtext">
            AI-powered personalized learning designed to boost your understanding, track real-time progress, and accelerate certifications.
          </p>
          <div className="hero-cta-group">
            <Link to="/courses">
              <button className="explore-btn">Explore Courses</button>
            </Link>
            <Link to="/aitutor">
              <button className="hero-secondary-btn">Try AI Tutor ↗</button>
            </Link>
          </div>
        </div>
        <div className="hero-badge-visual">
          <div className="hero-circle-accent">
            <div className="hero-inner-icon">AI</div>
          </div>
        </div>
      </section>

      {/* 4 Feature Tiles */}
      <section className="features-container">
        <Link to="/aitutor" className="feature-card-link">
          <div className="feature-card">
            <div className="feature-icon-box">🤖</div>
            <div className="feature-card-body">
              <h3>AI Tutor</h3>
              <p>Personalized learning assistant to guide you every step of the way.</p>
            </div>
          </div>
        </Link>

        <Link to="/courses" className="feature-card-link">
          <div className="feature-card">
            <div className="feature-icon-box">📚</div>
            <div className="feature-card-body">
              <h3>Smart Courses</h3>
              <p>Curated MERN and cloud courses engineered for fast retention.</p>
            </div>
          </div>
        </Link>

        <Link to="/dashboard" className="feature-card-link">
          <div className="feature-card">
            <div className="feature-icon-box">📊</div>
            <div className="feature-card-body">
              <h3>Progress Tracking</h3>
              <p>Get instant insights and real-time performance analytics.</p>
            </div>
          </div>
        </Link>

        <Link to="/certificate" className="feature-card-link">
          <div className="feature-card">
            <div className="feature-icon-box">🎓</div>
            <div className="feature-card-body">
              <h3>Certificates</h3>
              <p>Earn verified credentials to showcase your full-stack achievements.</p>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default Home;