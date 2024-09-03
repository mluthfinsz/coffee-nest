import React from "react";
import cafeImage from "../../assets/image/Asset3.png";

const Rekening = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col">
          <div
            className="rectangle"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.2)",
              padding: "50px 50px",
              borderRadius: "20px",
              maxWidth: "calc(95vw)",
              margin: "0 45px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ flex: 1 }}>
              <h2
                className="text-center mb-2"
                style={{
                  fontFamily: "Merriweather, serif",
                  fontSize: "40px",
                  fontWeight: "bold",
                  color: "transparent",
                  WebkitTextStroke: "0.5px #FFFF",
                  textShadow: "none",
                  textAlign: "center",
                }}
              >
                CAFFEINE COFFEE NEST
              </h2>

              <p
                className="text-left mb-2"
                style={{
                  fontFamily: "Caveat",
                  fontSize: "24px",
                  fontWeight: "bold",
                  color: "white",
                  textAlign: "center",
                }}
              >
                “Tempat Hangat untuk Kopi dan Cerita”
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button
                  className="btn mt-3"
                  style={{
                    fontSize: "14px",
                    fontFamily: "Merriweather, serif",
                    fontWeight: "bold",
                    backgroundColor: "#FFD700",
                    border: "3px solid #FFD700",
                    borderRadius: "10px",
                    color: "black",
                    width: "50%",
                  }}
                >
                  Beli Sekarang !
                </button>
              </div>
            </div>
            <div style={{ flex: 1, textAlign: "right" }}>
              <img
                src={cafeImage}
                alt="Coffee House"
                style={{
                  maxWidth: "70%",
                  borderRadius: "10px",
                  boxShadow: "34px -34px 3px 0 rgba(0, 0, 0, 0.2)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rekening;
