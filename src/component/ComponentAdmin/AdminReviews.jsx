import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/reviews");
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews", error);
      }
    };

    fetchReviews();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const rectStyle = {
    width: "900px",
    minHeight: "90vh",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "50px",
    position: isSticky ? "sticky" : "absolute",
    top: "30px",
    right: "50px",
    textAlign: "center",
    padding: "20px",
    zIndex: 1000,
    color: "black",
    fontFamily: "Merriweather, serif",
  };

  const cardStyle = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "20px",
    fontFamily: "Merriweather, serif",
    fontWeight: "normal",
  };

  const nameStyle = {
    fontWeight: "bold",
    color: "black",
    fontFamily: "Merriweather, serif",
    fontWeight: "normal",
  };

  return (
    <div style={rectStyle}>
      <h1
        style={{
          marginBottom: "20px",
          fontFamily: "Merriweather, serif",
          fontWeight: "bold",
          marginTop: "20px",
          color: "white",
        }}
      >
        Ulasan dari Pengguna
      </h1>
      {reviews.map((review) => (
        <div key={review.id} style={cardStyle}>
          <p style={nameStyle}>Nama: {review.name}</p>
          <p>Ulasan: {review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminReviews;
