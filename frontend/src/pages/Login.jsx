// src/pages/Login.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash, FaArrowLeft } from "react-icons/fa";
import "./Login.css";
import API_BASE_URL from '../config/api';

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
    setUser(null);
  }, [setUser]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch(API_BASE_URL + "/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password: password.trim() }),
      });
      const data = await res.json();
      if (data.success && data.token && data.user) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser({ ...data.user, token: data.token });
        switch (data.user.role) {
          case "lecturer": navigate("/lecturer"); break;
          case "student": navigate("/student"); break;
          case "prl": navigate("/prl"); break;
          case "pl": navigate("/pl"); break;
          case "admin": navigate("/admin"); break;
          default: navigate("/dashboard");
        }
      } else {
        setError(data.message || "Invalid username or password");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="app-container">
      <div className="login-page">
        <Link to="/" className="back-button">
          <FaArrowLeft /> Back to Home
        </Link>

        <div className="login-header">
          <h1 style={{ textAlign: "center", marginBottom: 0 }}>LUCT Reporting System</h1>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <h1>Login</h1>
          {error && <p className="error">{error}</p>}
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-icon" onClick={() => setShowPassword((p) => !p)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit">Login</button>
        </form>

        <p
          className="toggle-register"
          style={{ marginTop: "1.5rem", marginBottom: "0.5rem", textAlign: "center", fontWeight: "bold", fontSize: "1.1rem" }}
        >
          <Link to="/register" style={{ color: 'inherit', textDecoration: 'none' }}>
            Don't have an account? Register
          </Link>
        </p>
      </div>
    </div>
  );
}
