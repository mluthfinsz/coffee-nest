import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      const currentUser = jwtDecode(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      setMessage(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      setMessage(error.response.data.message || "An error occurred");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "2rem",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        borderRadius: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        minHeight: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          marginBottom: "3rem",
          fontFamily: "Merriweather, serif",
          fontWeight: "bold",
          color: "white",
        }}
      >
        LOGIN
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
          Login
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
          textAlign: "center",
          marginTop: "1rem",
          fontFamily: "Merriweather, serif",
          fontSize: "14px",
        }}
      >
        Belum punya akun?{" "}
        <Link
          to="/register"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Daftar disini
        </Link>
      </p>
    </div>
  );
};

export default Login;
