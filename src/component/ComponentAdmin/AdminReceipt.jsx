import React, { useState, useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";

const Receipt = ({ isSticky }) => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
    const fetchReceipts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/admin/receipts"
        );
        if (Array.isArray(data)) {
          setReceipts(data);
        } else {
          console.error("Unexpected response format:", data);
          setReceipts([]);
        }
      } catch (error) {
        console.error("Error fetching receipts:", error);
        setReceipts([]);
      }
    };

    fetchReceipts();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/admin/receipts/${id}`, {
        status,
      });
      setReceipts(
        receipts.map((receipt) =>
          receipt.id === id ? { ...receipt, status } : receipt
        )
      );
    } catch (error) {
      console.error("Error updating receipt status:", error);
    }
  };

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
    color: "white",
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
          Management Pemesanan
        </h1>
        <div style={tableContainerStyle}>
          <Table striped bordered hover style={{ borderRadius: "50px" }}>
            <thead style={tableHeadStyle}>
              <tr>
                <th style={tableHeadStyle}>Nama</th>
                <th style={tableHeadStyle}>Nomor Handphone</th>
                <th style={tableHeadStyle}>Nomor Meja</th>
                <th style={tableHeadStyle}>Ringkasan Pesanan</th>
                <th style={tableHeadStyle}>Total Harga</th>
                <th style={tableHeadStyle}>Status</th>
                <th style={tableHeadStyle}>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(receipts) && receipts.length > 0 ? (
                receipts.map((receipt) => (
                  <tr key={receipt.id}>
                    <td style={tableCellStyle}>{receipt.name}</td>
                    <td style={tableCellStyle}>{receipt.phoneNumber}</td>
                    <td style={tableCellStyle}>{receipt.tableNumber}</td>
                    <td style={tableCellStyle}>{receipt.orderSummary}</td>
                    <td style={tableCellStyle}>{receipt.total_price}</td>
                    <td style={tableCellStyle}>{receipt.status}</td>
                    <td style={tableCellStyle}>
                      {receipt.status === "Unpaid" ? (
                        <Button
                          variant="success"
                          onClick={() => updateStatus(receipt.id, "Paid")}
                        >
                          Mark as Paid
                        </Button>
                      ) : (
                        "Paid"
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center" }}>
                    No receipts available
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default Receipt;
