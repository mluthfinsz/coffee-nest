import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const [menus, setMenus] = useState([]);
  const [cart, setCart] = useState({});
  const [isChosen, setIsChosen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    const response = await axios.get("http://localhost:5000/api/menu");
    setMenus(response.data);
  };

  const updateMenuStock = (menuId, quantity) => {
    setMenus((prevMenus) =>
      prevMenus.map((menu) =>
        menu.id === menuId
          ? { ...menu, stock: Math.max(menu.stock - quantity, 0) }
          : menu
      )
    );
  };

  const addToCart = (menuId) => {
    const updatedQuantity = (cart[menuId] || 0) + 1;
    setCart({
      ...cart,
      [menuId]: updatedQuantity,
    });
    updateMenuStock(menuId, 1);
  };

  const subtractFromCart = (menuId) => {
    const updatedQuantity = Math.max((cart[menuId] || 0) - 1, 0);
    setCart({
      ...cart,
      [menuId]: updatedQuantity,
    });
    if (cart[menuId] > 0) {
      updateMenuStock(menuId, -1);
    }
  };

  const handleChooseOrder = () => {
    setIsChosen(true);
  };

  const handleViewReceipt = () => {
    navigate("/pembayaran", { state: { cart, menus } });
  };

  const handleConfirmOrder = async () => {
    try {
      await axios.post("http://localhost:5000/api/update-stock", { cart });
      navigate("/pembayaran", { state: { cart, menus } });
    } catch (error) {
      console.error("Error updating stock:", error);
    }
  };

  const totalPrice = Object.entries(cart).reduce(
    (total, [menuId, quantity]) => {
      const menu = menus.find((m) => m.id === parseInt(menuId));
      return total + menu.price * quantity;
    },
    0
  );

  return (
    <Container className="mt-0">
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Merriweather, serif",
          fontWeight: "bold",
          color: "#FFD700",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        Pemesanan
      </h1>
      <hr
        style={{ color: "white", borderWidth: "2px", marginBottom: "30px" }}
      />

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {menus.map((menu) => (
          <div key={menu.id} className="col">
            <div className="card-container" style={{ position: "relative" }}>
              <div
                className="card-shadow"
                style={{
                  position: "absolute",
                  top: "-15px",
                  left: "-15px",
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "40px",
                  boxShadow: "-16px -17px 15px rgba(0, 0, 0, 0.1)",
                  zIndex: 1,
                }}
              ></div>
              <div
                className="card rounded-5 p-4 border-0 border-primary"
                style={{
                  width: "100%",
                  height: "350px",
                  boxShadow: "-16px -17px 15px rgba(0, 0, 0, 0.2)",
                  position: "relative",
                  borderRadius: "50px",
                  overflow: "hidden",
                  zIndex: 2,
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {menu.image && (
                  <img
                    src={`http://localhost:5000/uploads/${menu.image}`}
                    className="card-img-top"
                    style={{
                      height: "150px",
                      width: "auto",
                      maxWidth: "100%",
                      borderRadius: "20px",
                      objectFit: "cover",
                    }}
                    alt={menu.name}
                  />
                )}
                <div className="card-body" style={{ position: "relative" }}>
                  <p
                    className="card-text"
                    style={{ fontFamily: "Josefin Sans" }}
                  >
                    {menu.name}
                  </p>
                  <p
                    className="card-price"
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      fontFamily: "Josefin Sans",
                      fontWeight: "bold",
                      fontSize: "14px",
                    }}
                  >
                    Rp{menu.price}
                  </p>
                  <p
                    className="card-stock"
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      fontFamily: "Josefin Sans",
                      fontWeight: "bold",
                      fontSize: "14px",
                      color: menu.stock === 0 ? "red" : "black",
                    }}
                  >
                    {menu.stock === 0 ? "Habis" : `Stock: ${menu.stock}`}
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <Button
                        className="px-2 bg-white rounded-2 border-2 border-dark"
                        style={{
                          width: "30px",
                          height: "auto",
                          color: "black",
                        }}
                        onClick={() => subtractFromCart(menu.id)}
                        disabled={menu.stock === 0}
                      >
                        -
                      </Button>
                      <span
                        className="px-3"
                        style={{ fontFamily: "Josefin Sans" }}
                      >
                        {cart[menu.id] || 0}
                      </span>
                      <Button
                        className="px-2 bg-white rounded-2 border-2 border-dark"
                        style={{
                          width: "30px",
                          height: "auto",
                          color: "black",
                        }}
                        onClick={() => addToCart(menu.id)}
                        disabled={menu.stock === 0}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isChosen ? (
        <div
          className="d-flex flex-wrap justify-content-between mt-5 rounded-2"
          style={{
            border: "1px solid #ECE2C5",
            padding: "1rem",
            color: "#FFD700",
            fontFamily: "Merriweather, serif",
          }}
        >
          <div
            className="d-flex flex-column align-items-center"
            style={{ flex: 1 }}
          >
            <h6>Qty</h6>
            {Object.entries(cart).map(([menuId, qty]) => (
              <p key={menuId}>{qty}</p>
            ))}
          </div>
          <div
            className="d-flex flex-column align-items-center"
            style={{ flex: 1 }}
          >
            <h6>Pesanan</h6>
            {Object.entries(cart).map(([menuId]) => (
              <p key={menuId}>
                {menus.find((menu) => menu.id === parseInt(menuId)).name}
              </p>
            ))}
          </div>
          <div
            className="d-flex flex-column align-items-center"
            style={{ flex: 1 }}
          >
            <h6>Harga Total (IDR)</h6>
            {Object.entries(cart).map(([menuId, qty]) => (
              <p key={menuId}>
                Rp
                {(
                  qty * menus.find((menu) => menu.id === parseInt(menuId)).price
                ).toLocaleString()}
              </p>
            ))}
          </div>
        </div>
      ) : null}

      {isChosen && totalPrice > 0 ? (
        <div className="d-flex justify-content-center mt-5">
          <h5
            style={{
              textAlign: "center",
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
              color: "white",
            }}
          >
            Total Harga: Rp {totalPrice.toLocaleString()}
          </h5>
        </div>
      ) : null}

      <div className="d-flex justify-content-center mt-3">
        {!isChosen ? (
          <Button
            onClick={handleChooseOrder}
            style={{
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
              color: "black",
              backgroundColor: "#FFD700",
              border: "none",
              marginTop: "20px",
              marginBottom: "20px",
              width: "50%",
              height: "50px",
              fontSize: "18px",
              padding: "10px 20px",
            }}
            disabled={Object.keys(cart).length === 0}
          >
            Rincian Pesanan
          </Button>
        ) : (
          <Button
            onClick={handleConfirmOrder}
            style={{
              fontFamily: "Merriweather, serif",
              fontWeight: "bold",
              color: "black",
              backgroundColor: "#FFD700",
              border: "none",
              marginTop: "20px",
              marginBottom: "20px",
              width: "50%",
              height: "50px",
              fontSize: "18px",
              padding: "10px 20px",
            }}
          >
            Lanjut Pembayaran
          </Button>
        )}
      </div>
    </Container>
  );
};

export default UserMenu;
