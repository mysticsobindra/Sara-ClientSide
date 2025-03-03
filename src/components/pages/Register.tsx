import { useState } from "react";
import { register } from "../api/register";

const Register = () => {
  const [email, setEmail] = useState("test5@gmail.com");
  const [password, setPassword] = useState("test5");
  const [referralCode, setreferralCode] = useState("cf8cdf");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Referral", referralCode);
    register({ email, password, referralCode });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h2 style={{ textAlign: "center", color: "green", fontSize: "40px" }}>
        Register
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <label
          style={{
            outline: "none",
            fontWeight: "lighter",
            fontSize: "20px",
            height: "fit-content",
            marginBottom: "10px",
          }}
        >
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              backgroundColor: "transparent",
              width: "100%",
              padding: "8px",
              margin: "5px 0",
            }}
            required
          />
        </label>
        <label
          style={{
            outline: "none",
            fontWeight: "lighter",
            fontSize: "20px",
            height: "fit-content",
            marginBottom: "10px",
          }}
        >
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              backgroundColor: "transparent",
              width: "100%",
              padding: "8px",
              margin: "5px 0",
            }}
            required
          />
        </label>
        <label
          style={{
            outline: "none",
            fontWeight: "lighter",
            fontSize: "20px",
            height: "fit-content",
            marginBottom: "10px",
          }}
        >
          Referral Code:
          <input
            type="text"
            value={referralCode}
            onChange={(e) => setreferralCode(e.target.value)}
            style={{
              backgroundColor: "transparent",
              width: "100%",
              padding: "8px",
              margin: "5px 0",
            }}
            required
          />
        </label>
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
