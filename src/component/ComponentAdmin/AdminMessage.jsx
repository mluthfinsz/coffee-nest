import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import axios from "axios";

const AdminMessages = ({ isSticky }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get("http://localhost:5000/api/messages");
      setMessages(res.data);
    };

    fetchMessages();
  }, []);

  const rectStyle = {
    width: "900px",
    height: "90vh",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "50px",
    position: isSticky ? "sticky" : "absolute",
    top: "30px",
    right: "50px",
    textAlign: "center",
    paddingTop: "20px",
    zIndex: 1000,
    overflowY: "auto",
  };

  const tableHeadStyle = {
    backgroundColor: "white",
    color: "black",
    fontWeight: "bold",
    fontFamily: "Merriweather, serif",
    textAlign: "center",
    border: "1px solid #000",
    verticalAlign: "middle",
  };

  const tableCellStyle = {
    backgroundColor: "transparent",
    textAlign: "center",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
    border: "1px solid #000",
    color: "black",
    verticalAlign: "middle",
  };

  const tableContainerStyle = {
    maxHeight: "400px",
    overflowY: "auto",
  };

  return (
    <div style={rectStyle}>
      <Container className="mt-3" style={{ paddingTop: "10px" }}>
        <h1
          style={{
            marginTop: "0",
            fontFamily: "Merriweather, serif",
            fontWeight: "bold",
            marginBottom: "30px",
          }}
        >
          Pesan dari Pengguna
        </h1>
        <div style={tableContainerStyle}>
          <Table striped bordered hover style={{ borderRadius: "50px" }}>
            <thead style={tableHeadStyle}>
              <tr>
                <th style={tableHeadStyle}>ID</th>
                <th style={tableHeadStyle}>Nama</th>
                <th style={tableHeadStyle}>Email</th>
                <th style={tableHeadStyle}>Pesan</th>
                <th style={tableHeadStyle}>Tanggal</th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message) => (
                <tr key={message.id}>
                  <td style={tableCellStyle}>{message.id}</td>
                  <td style={tableCellStyle}>{message.name}</td>
                  <td style={tableCellStyle}>{message.email}</td>
                  <td style={tableCellStyle}>{message.message}</td>
                  <td style={tableCellStyle}>
                    {new Date(message.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default AdminMessages;
