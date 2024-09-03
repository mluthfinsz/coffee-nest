import React from "react";
import sampleImage from "../../assets/image/Baju.png";

const BeritaUser = () => {
  return (
    <div style={{ margin: "0px 0" }}>
      {/* Judul di atas card */}
      <h1
        style={{
          fontFamily: "Merriweather, serif",
          fontSize: "32px",
          fontWeight: "bold",
          color: "#FFD700",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        BERITA
      </h1>

      {/* Card konten */}
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
              fontSize: "24px",
              fontWeight: "bold",
              color: "#ECE2C5",
              marginBottom: "20px",
            }}
          >
            Meluncurkan Koleksi Baju dan Jaket Eksklusif
          </h2>
          <p
            style={{
              fontFamily: "Josefin Sans",
              fontWeight: "normal",
              fontSize: "14px",
              color: "white",
              textAlign: "justify",
            }}
          >
            Pada hari ini, Caffeine Coffee Nest dengan bangga mengumumkan
            peluncuran koleksi terbaru mereka yang tidak hanya menghadirkan
            kenikmatan kopi, tetapi juga gaya hidup modern melalui lini produk
            fashion eksklusif. Desain yang diusung menggabungkan elemen elegan
            dan kasual, sehingga cocok dikenakan di berbagai kesempatan, baik
            saat bersantai menikmati secangkir kopi favorit di kedai kami atau
            beraktivitas di luar ruangan. "Peluncuran koleksi baju dan jaket ini
            merupakan langkah kami untuk membawa Caffeine Coffee Nest ke level
            berikutnya," kata CEO Caffeine Coffee Nest dalam pernyataan
            resminya. "Kami ingin memberikan lebih dari sekadar pengalaman
            ngopi. Kami ingin menjadi bagian dari gaya hidup pelanggan kami, dan
            koleksi ini adalah salah satu caranya." Untuk merayakan peluncuran
            ini, Caffeine Coffee Nest juga mengadakan promo spesial bagi para
            pelanggan setia. Dapatkan diskon khusus dan kesempatan untuk membawa
            pulang merchandise eksklusif ini di semua cabang Caffeine Coffee
            Nest.
          </p>
        </div>

        {/* Bagian kanan dengan gambar */}
        <div style={{ maxWidth: "35%" }}>
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
    </div>
  );
};

export default BeritaUser;
