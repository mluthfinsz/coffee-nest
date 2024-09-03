import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function CustomNavbar() {
  const navLinkStyle = {
    fontFamily: "Merriweather, serif",
    fontWeight: "bold",
    fontSize: "14px",
    textTransform: "uppercase",
    color: "#FFD700",
    marginLeft: "30px",
  };

  const brandStyle = {
    fontFamily: "caveat",
    fontWeight: "bold",
    fontSize: "28px",
    color: "#FFD700",
  };

  return (
    <>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="#home" style={brandStyle}>
            Caffeine Coffee Nest
          </Navbar.Brand>
          <Nav className="ml-auto">
            {" "}
            <Nav.Link href="/home" style={navLinkStyle}>
              BERANDA
            </Nav.Link>
            <Nav.Link href="tentangkami" style={navLinkStyle}>
              TENTANG KAMI
            </Nav.Link>
            <Nav.Link href="menu" style={navLinkStyle}>
              MENU & PEMESANAN
            </Nav.Link>
            <Nav.Link href="kontak" style={navLinkStyle}>
              KONTAK
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
