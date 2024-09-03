import React, { useState } from "react";
import axios from "axios";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/reviews", {
        name,
        review,
      });
      alert("Review submitted successfully!");
      setName("");
      setReview("");
    } catch (error) {
      console.error("There was an error submitting your review!", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };

  const formStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  };

  const rectangleStyle = {
    maxWidth: "calc(95vw)",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "50px 50px",
    textAlign: "center",
    margin: "0 45px",
    justifyContent: "space-between",
  };

  const headingStyle = {
    marginBottom: "20px",
    marginTop: "50px",
    textAlign: "center",
    fontFamily: "Merriweather, serif",
    fontWeight: "bold",
    color: "#FFD700",
  };

  return (
    <div>
      <h1 style={headingStyle}>Ulasan</h1>
      <div style={rectangleStyle}>
        <form style={formStyle} onSubmit={handleSubmit}>
          <h2
            style={{
              marginBottom: "20px",
              textAlign: "center",
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
            }}
          >
            Beri Ulasan
          </h2>
          <div
            style={{
              marginBottom: "15px",
              fontFamily: "Josefin Sans",
              fontWeight: "normal",
              color: "black",
            }}
          >
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontFamily: "Josefin Sans",
                fontWeight: "normal",
                color: "black",
              }}
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "16px",
                boxSizing: "border-box",
              }}
              required
            />
          </div>
          <div
            style={{
              marginBottom: "15px",
              fontFamily: "Josefin Sans",
              fontWeight: "normal",
              color: "black",
            }}
          >
            <label style={{ display: "block", marginBottom: "5px" }}>
              Review
            </label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "16px",
                minHeight: "100px",
                boxSizing: "border-box",
              }}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#191919",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
            }}
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
