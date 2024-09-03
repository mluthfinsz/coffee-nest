import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import axios from "axios";
import { useLocation } from "react-router-dom";

const ConfirmationForm = () => {
  const location = useLocation();
  const { state } = location;
  const { cart, menus } = state || { cart: {}, menus: [] };

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    tableNumber: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, photo: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("tableNumber", formData.tableNumber);
    formDataToSend.append("photo", formData.photo);
    formDataToSend.append("orderSummary", getOrderSummary());
    formDataToSend.append("totalPrice", getTotalPrice());

    try {
      const response = await axios.post(
        "http://localhost:5000/api/orders",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      window.location.href = "/pembayaransuccess";
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const getOrderSummary = () => {
    return Object.entries(cart)
      .map(([menuId, quantity]) => {
        const menu = menus.find((menu) => menu.id === parseInt(menuId));
        return `${quantity}x ${menu.name}`;
      })
      .join(", ");
  };

  const getTotalPrice = () => {
    return Object.entries(cart)
      .reduce((total, [menuId, quantity]) => {
        const menu = menus.find((menu) => menu.id === parseInt(menuId));
        return total + menu.price * quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh", marginTop: "100px" }}
    >
      <Card
        style={{
          width: "80%",
          margin: "50px auto",
          padding: "2rem",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          borderRadius: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          maxHeight: "800px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1
          className="text-center mb-4"
          style={{
            fontFamily: "Merriweather, serif",
            fontWeight: "bold",
            color: "white",
            marginTop: "30px",
          }}
        >
          Konfirmasi Pembayaran
        </h1>
        <Form
          onSubmit={handleSubmit}
          style={{
            fontFamily: "Merriweather, serif",
            color: "black",
          }}
        >
          <Form.Group controlId="formName">
            <Form.Label>Nama</Form.Label>
            <Form.Control
              style={{
                marginBottom: "10px",
                fontWeight: "100",
                fontSize: "14px",
              }}
              type="text"
              placeholder="Enter your name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Nomor Handphone</Form.Label>
            <Form.Control
              style={{
                marginBottom: "10px",
                fontWeight: "100",
                fontSize: "14px",
              }}
              type="text"
              placeholder="Enter your phone number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formTableNumber">
            <Form.Label>Nomor Meja</Form.Label>
            <Form.Control
              style={{
                marginBottom: "10px",
                fontWeight: "100",
                fontSize: "14px",
              }}
              type="text"
              placeholder="Enter table number"
              name="tableNumber"
              value={formData.tableNumber}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formOrderSummary">
            <Form.Label>Ringkasan Pesanan</Form.Label>
            <Form.Control
              style={{
                marginBottom: "10px",
                fontWeight: "100",
                fontSize: "14px",
              }}
              type="text"
              placeholder="Order Summary"
              value={getOrderSummary()}
              readOnly
            />
          </Form.Group>

          <Form.Group controlId="formTotalPrice">
            <Form.Label>Total Harga</Form.Label>
            <Form.Control
              style={{
                marginBottom: "10px",
                fontWeight: "100",
                fontSize: "14px",
              }}
              type="text"
              placeholder="Total Price"
              value={`Rp ${getTotalPrice()}`}
              readOnly
            />
          </Form.Group>

          <Form.Group controlId="formFile">
            <Form.Label>Bukti Transfer</Form.Label>
            <Form.Control
              style={{
                marginBottom: "10px",
                fontWeight: "100",
                fontSize: "14px",
              }}
              type="file"
              name="photo"
              onChange={handleFileChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-3"
            style={{
              backgroundColor: "#191919",
              borderColor: "#191919",
              color: "#FFFFFF",
            }}
          >
            Konfirmasi Pembayaran
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default ConfirmationForm;
