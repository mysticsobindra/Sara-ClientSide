import React, { useState } from "react";
import "../css/login.css";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("test1@gmail.com");
  const [password, setPassword] = useState("test1");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    axios
      .post(
        "http://localhost:3000/login",
        {
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Login successful:", response.data);
      })
      .catch((error) => {
        console.error("There was an error logging in:", error);
      });
  };

  return (
    <div>
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
