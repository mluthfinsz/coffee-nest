import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  console.log(currentUser);
  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/register", {
        username,
        email,
        password,
      });
      setMessage(response.data.message);
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      setMessage(error.response.data.error || "An error occurred");
    }
  };

  return (
    <div
      style={{
        width: "50%",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "2rem",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        maxHeight: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          marginBottom: "2rem",
          fontFamily: "Merriweather, serif",
          fontWeight: "bold",
          color: "white",
        }}
      >
        REGISTER
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          fontFamily: "Josefin Sans",
          fontWeight: "normal",
        }}
      >
        <label
          htmlFor="username"
          style={{
            marginBottom: "0.5rem",
            color: "#fff",
            fontFamily: "Merriweather, serif",
            fontWeight: "normal",
          }}
        >
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{
            padding: "0.5rem",
            marginBottom: "1rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "100%",
            boxSizing: "border-box",
            fontFamily: "Josefin Sans",
            fontWeight: "normal",
          }}
        />
        <label
          htmlFor="email"
          style={{
            marginBottom: "0.5rem",
            color: "#fff",
            fontFamily: "Merriweather, serif",
            fontWeight: "normal",
          }}
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "0.5rem",
            marginBottom: "1rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "100%",
            boxSizing: "border-box",
            fontFamily: "Josefin Sans",
            fontWeight: "normal",
          }}
        />
        <label
          htmlFor="password"
          style={{
            marginBottom: "0.5rem",
            color: "#fff",
            fontFamily: "Merriweather, serif",
            fontWeight: "normal",
          }}
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{
            padding: "0.5rem",
            marginBottom: "1rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "100%",
            boxSizing: "border-box",
            fontFamily: "Josefin Sans",
            fontWeight: "normal",
          }}
        />
        <label
          htmlFor="confirmPassword"
          style={{
            marginBottom: "0.5rem",
            color: "#fff",
            fontFamily: "Merriweather, serif",
            fontWeight: "normal",
          }}
        >
          Konfirmasi Password
        </label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Konfirmasi Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          style={{
            padding: "0.5rem",
            marginBottom: "1rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            width: "100%",
            boxSizing: "border-box",
            fontFamily: "Josefin Sans",
            fontWeight: "normal",
          }}
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#191919",
            color: "#fff",
            cursor: "pointer",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          Register
        </button>
      </form>
      {message && (
        <p
          style={{
            marginTop: "1rem",
            color: "red",
            fontFamily: "Merriweather, serif",
          }}
        >
          {message}
        </p>
      )}
      <p
        style={{
          marginTop: "1rem",
          color: "black",
          fontFamily: "Josefin Sans",
        }}
      >
        Sudah punya akun?{" "}
        <a href="/login" style={{ color: "blue", textDecoration: "underline" }}>
          Login di sini
        </a>
      </p>
    </div>
  );
};

export default Register;
