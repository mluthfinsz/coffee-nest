// Halaman Struk
import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const Receipt = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { ticket } = location.state;

  const calculateTotal = () => {
    const prices = {
      Croissant: 30000,
      KentangGoreng: 20000,
      Dimsum: 25000,
      SpaghettiBolognese: 30000,
      Croffle: 20000,
      BeefBowl: 30000,
      Kue: 15000,
      OnionRing: 20000,
      MartabakMie: 15000,
      SingkongGoreng: 18000,
      NasiGoreng: 27000,
      Sandwich: 30000,
      Americano: 15000,
      Espresso: 18000,
      Cappuccino: 25000,
      Macchiato: 30000,
      KopiHouse: 20000,
      Mocha: 25000,
      LongBlack: 20000,
      CaramelMacchiato: 25000,
      LycheeYakult: 25000,
      MilkTea: 20000,
      IcedChocolate: 20000,
      IcedTea: 15000,
    };

    return Object.keys(ticket).reduce((total, category) => {
      return total + ticket[category] * prices[category];
    }, 0);
  };

  const selectedTickets = Object.keys(ticket).filter(
    (category) => ticket[category] > 0
  );
  const totalPrice = calculateTotal();

  const handleConfirmation = () => {
    navigate("/pembayaran", { state: { ticket } });
  };

  return (
    <>
      <Container
        className="mt-5"
        style={{
          maxWidth: "800px",
          backgroundColor: "#f8f9fa",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Merriweather, serif",
            fontWeight: "bold",
            color: "#4f4cee",
            marginBottom: "20px",
          }}
        >
          Struk Pemesanan
        </h1>
        <Table
          striped
          bordered
          hover
          className="mt-4"
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <thead style={{ backgroundColor: "#4f4cee", color: "#ffffff" }}>
            <tr>
              <th>Qty</th>
              <th>Tipe Item</th>
              <th>Harga Total (IDR)</th>
            </tr>
          </thead>
          <tbody>
            {selectedTickets.map((category) => (
              <tr key={category} style={{ textAlign: "center" }}>
                <td>{ticket[category]}</td>
                <td>{category}</td>
                <td>
                  Rp
                  {(
                    ticket[category] *
                    {
                      Croissant: 30000,
                      KentangGoreng: 20000,
                      Dimsum: 25000,
                      SpaghettiBolognese: 30000,
                      Croffle: 20000,
                      BeefBowl: 30000,
                      Kue: 15000,
                      OnionRing: 20000,
                      MartabakMie: 15000,
                      SingkongGoreng: 18000,
                      NasiGoreng: 27000,
                      Sandwich: 30000,
                      Americano: 15000,
                      Espresso: 18000,
                      Cappuccino: 25000,
                      Macchiato: 30000,
                      KopiHouse: 20000,
                      Mocha: 25000,
                      LongBlack: 20000,
                      CaramelMacchiato: 25000,
                      LycheeYakult: 25000,
                      MilkTea: 20000,
                      IcedChocolate: 20000,
                      IcedTea: 15000,
                    }[category]
                  ).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center mt-5">
          <h5
            style={{
              textAlign: "center",
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
              color: "#4f4cee",
            }}
          >
            Total Harga: Rp {totalPrice.toLocaleString()}
          </h5>
        </div>
      </Container>
      <div className="d-flex justify-content-center mt-4">
        <Button
          onClick={handleConfirmation}
          style={{
            backgroundColor: "#4f4cee",
            borderColor: "#4f4cee",
            fontFamily: "Merriweather, serif",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Lanjut ke Pembayaran
        </Button>
      </div>
    </>
  );
};

export default Receipt;
