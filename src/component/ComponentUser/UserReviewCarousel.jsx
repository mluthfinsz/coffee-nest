import React, { useEffect, useState } from "react";
import { Carousel, Card } from "react-bootstrap";
import axios from "axios";

const ReviewCardSlider = () => {
  const [reviews, setReviews] = useState([]);

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

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <Carousel
        indicators={false}
        interval={3000}
        fade={true}
        style={{
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        {reviews.map((review) => (
          <Carousel.Item key={review.id}>
            <Card
              style={{
                borderRadius: "12px",
                padding: "1rem",
                backgroundColor: "#383838",
                color: "white",
                height: "250px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.5s ease",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
                margin: "auto",
              }}
            >
              <Card.Body
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Card.Title
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    fontFamily: "Merriweather, serif",
                    marginBottom: "0.5rem",
                    transition: "color 0.5s ease",
                  }}
                >
                  {review.name}
                </Card.Title>
                <Card.Text
                  style={{
                    fontStyle: "italic",
                    fontFamily: "Josefin Sans",
                    fontWeight: "normal",
                    color: "#FFFFFF",
                    fontSize: "14px",
                    transition: "color 0.5s ease",
                    margin: "0",
                  }}
                >
                  {review.review}
                </Card.Text>
              </Card.Body>
              <div
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.3)",
                  transition: "opacity 0.5s ease",
                  opacity: "0",
                }}
              ></div>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewCardSlider;
