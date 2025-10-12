// src/pages/LandingPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaChartLine, FaUsers, FaBook, FaClock, FaShieldAlt } from "react-icons/fa";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Limkokwing University</h1>
          <h2 className="hero-subtitle">Class Tracking & Reporting System</h2>
          <p className="hero-description">
            Streamline attendance management and class reporting with our comprehensive digital solution
          </p>
          <div className="hero-buttons">
            <Link to="/login" className="hero-btn primary">Get Started</Link>
            <Link to="/register" className="hero-btn secondary">Create Account</Link>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Choose Our System?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaGraduationCap />
            </div>
            <h3>For Students</h3>
            <p>Track your attendance, view class schedules, and monitor your academic progress in real-time</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaBook />
            </div>
            <h3>For Lecturers</h3>
            <p>Easy attendance marking, class reporting, and student performance tracking all in one place</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaChartLine />
            </div>
            <h3>Analytics & Reports</h3>
            <p>Comprehensive analytics and detailed reports to support data-driven decision making</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaUsers />
            </div>
            <h3>Multi-Role Access</h3>
            <p>Customized dashboards for students, lecturers, program leaders, and administrators</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaClock />
            </div>
            <h3>Real-Time Updates</h3>
            <p>Instant notifications and live updates for all attendance and class activities</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaShieldAlt />
            </div>
            <h3>Secure & Reliable</h3>
            <p>Bank-level security with encrypted data storage and secure authentication</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-container">
          <h2 className="section-title">About Limkokwing University</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Limkokwing University of Creative Technology (referred to as LUCT) is a private international university with a presence across Africa, Europe, and Asia. With its innovative approach to education, LUCT has been at the forefront of nurturing creative and entrepreneurial talents.
              </p>
              <p>
                Our Class Tracking & Reporting System is designed to enhance the educational experience by providing seamless communication between students, faculty, and administration. This digital solution ensures transparency, accountability, and efficiency in managing classroom activities.
              </p>
              <div className="stats-row">
                <div className="stat-item">
                  <h3>10,000+</h3>
                  <p>Active Students</p>
                </div>
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Faculty Members</p>
                </div>
                <div className="stat-item">
                  <h3>50+</h3>
                  <p>Programs Offered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of students and faculty using our platform</p>
          <Link to="/register" className="cta-button">Create Your Account</Link>
        </div>
      </section>
    </div>
  );
}
