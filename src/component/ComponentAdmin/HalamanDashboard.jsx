// import React, { useState, useEffect } from "react";

// const Rectangle = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [dailyIncome, setDailyIncome] = useState(0);
//   const currentUser = JSON.parse(localStorage.getItem("currentUser"));
//   console.log(currentUser);

//   useEffect(() => {
//     const fetchDailyIncome = () => {
//       const fetchedIncome = 500;
//       setDailyIncome(fetchedIncome);
//     };

//     fetchDailyIncome();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.pageYOffset > 200) {
//         setIsSticky(true);
//       } else {
//         setIsSticky(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const rectStyle = {
//     width: "900px",
//     height: "90vh",
//     backgroundColor: "rgba(255, 255, 255, 0.5)",
//     backdropFilter: "blur(10px)",
//     WebkitBackdropFilter: "blur(10px)",
//     borderRadius: "50px",
//     position: isSticky ? "sticky" : "absolute",
//     top: "30px",
//     right: "50px",
//     textAlign: "center",
//     paddingTop: "20px",
//     zIndex: 1000,
//   };

//   const incomeBoxStyle = {
//     position: "absolute",
//     top: "20px",
//     left: "20px",
//     backgroundColor: "rgba(255, 255, 255, 0.5)",
//     backdropFilter: "blur(10px)",
//     WebkitBackdropFilter: "blur(10px)",
//     padding: "10px",
//     borderRadius: "10px",
//     zIndex: 1000,
//   };

//   return (
//     <div style={rectStyle}>
//       <div style={incomeBoxStyle}>
//         <h4>Total Pendapatan Hari Ini</h4>
//         <p>Rp {dailyIncome}</p>
//       </div>
//     </div>
//   );
// };

// export default Rectangle;
