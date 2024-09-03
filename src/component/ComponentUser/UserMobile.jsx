import React from "react";
import sampleImage from "../../assets/image/Download.png";

const UserMobile = () => {
  return (
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
      <div style={{ maxWidth: "50%", marginRight: "20px" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontSize: "32px",
            fontWeight: "bold",
            color: "#ECE2C5",
            marginBottom: "20px",
          }}
        >
          Caffeine Coffee Nest APP
        </h2>
        <p
          style={{
            fontFamily: "Josefin Sans",
            fontWeight: "normal",
            fontSize: "18px",
            color: "white",
            textAlign: "justify",
          }}
        >
          Temukan cita rasa kopi terbaik dengan suasana yang hangat dan nyaman.
          Dari biji kopi pilihan hingga layanan ramah, kami menghadirkan
          pengalaman ngopi yang tak terlupakan. Ayo, kunjungi kami dan nikmati
          secangkir kebahagiaan hari ini!
        </p>
      </div>

      <div style={{ maxWidth: "45%" }}>
        <img
          src={sampleImage}
          alt="Sample"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default UserMobile;
