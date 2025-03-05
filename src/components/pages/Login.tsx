import React, { useState } from "react";
import "../css/login.css";
import login from "../api/login";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("test1@gmail.com");
  const [password, setPassword] = useState("test1");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await login(email, password);
    if (!!response) {
      alert("User logged in successfully");
      navigate("/dashboard");
    } else {
      console.error("Error logging in user:", response);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form-container">
        <label className="login-form-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-form-input"
          />
        </label>
        <label className="login-form-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-form-input login-form-input-password"
          />
        </label>
        <button type="submit" className="login-form-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
