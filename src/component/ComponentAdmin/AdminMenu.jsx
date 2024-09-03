import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminMenu = () => {
  const [menus, setMenus] = useState([]);
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    image: null,
  });
  const [editForm, setEditForm] = useState({
    id: null,
    name: "",
    price: "",
    stock: "",
    image: null,
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/menu");
      setMenus(response.data);
    } catch (error) {
      console.error("Error fetching menus:", error);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setForm({ ...form, image: e.target.files[0] });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleEditChange = (e) => {
    if (e.target.name === "image") {
      setEditForm({ ...editForm, image: e.target.files[0] });
    } else {
      setEditForm({ ...editForm, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    try {
      await axios.post("http://localhost:5000/api/menu", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchMenus();
      setForm({ name: "", price: "", stock: "", image: null });
    } catch (error) {
      console.error("Error submitting menu:", error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in editForm) {
      formData.append(key, editForm[key]);
    }
    try {
      await axios.put(
        `http://localhost:5000/api/menu/${editForm.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      fetchMenus();
      setEditForm({ id: null, name: "", price: "", stock: "", image: null });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating menu:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/menu/${id}`);
      fetchMenus();
    } catch (error) {
      console.error("Error deleting menu:", error);
    }
  };

  const handleUpdate = (menu) => {
    setEditForm({
      id: menu.id,
      name: menu.name,
      price: menu.price,
      stock: menu.stock,
      image: menu.image,
    });
    setIsEditing(true);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
    setEditForm({ id: null, name: "", price: "", stock: "", image: null });
  };

  return (
    <div style={styles.rectStyle}>
      <div style={styles.container}>
        <h2 style={styles.title}>Admin Menu Management</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock"
            value={form.stock}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            style={styles.fileInput}
          />
          <button type="submit" style={styles.button}>
            Add Menu
          </button>
        </form>
        <div style={styles.scrollContainer}>
          <table style={styles.menuTable}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Image</th>
                <th style={styles.tableHeader}>Name</th>
                <th style={styles.tableHeader}>Price</th>
                <th style={styles.tableHeader}>Stock</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu) => (
                <tr key={menu.id} style={styles.menuItem}>
                  <td style={styles.tableData}>
                    {menu.image && (
                      <img
                        src={`http://localhost:5000/uploads/${menu.image}`}
                        alt={menu.name}
                        width="50"
                        style={styles.image}
                      />
                    )}
                  </td>
                  <td style={styles.tableData}>{menu.name}</td>
                  <td style={styles.tableData}>Rp. {menu.price}</td>
                  <td style={styles.tableData}>{menu.stock}</td>
                  <td style={styles.tableData}>
                    <div style={styles.buttonGroup}>
                      <button
                        onClick={() => handleUpdate(menu)}
                        style={styles.updateButton}
                      >
                        Update
                      </button>
                      <button
                        onClick={() => handleDelete(menu.id)}
                        style={styles.deleteButton}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isEditing && (
          <div style={styles.modal}>
            <div style={styles.modalContent}>
              <h3>Edit Menu</h3>
              <form onSubmit={handleEditSubmit} style={styles.form}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={editForm.name}
                  onChange={handleEditChange}
                  style={styles.input}
                />
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={editForm.price}
                  onChange={handleEditChange}
                  style={styles.input}
                />
                <input
                  type="number"
                  name="stock"
                  placeholder="Stock"
                  value={editForm.stock}
                  onChange={handleEditChange}
                  style={styles.input}
                />
                <input
                  type="file"
                  name="image"
                  onChange={handleEditChange}
                  style={styles.fileInput}
                />
                <button type="submit" style={styles.button}>
                  Update Menu
                </button>
                <button
                  type="button"
                  onClick={handleCloseEdit}
                  style={styles.closeButton}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  rectStyle: {
    width: "900px",
    height: "90vh",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    borderRadius: "50px",
    position: "absolute",
    top: "30px",
    right: "50px",
    textAlign: "center",
    paddingTop: "20px",
    zIndex: 1000,
    overflow: "hidden",
    padding: "20px",
  },
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "transparent",
    borderRadius: "8px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "5px",
    fontFamily: "Merriweather, serif",
    fontWeight: "bold",
    color: "#ECE2C5",
    marginTop: "-30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    marginBottom: 5,
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ddd",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
  },
  fileInput: {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "4px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#191919",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
  },
  menuTable: {
    width: "100%",
    borderCollapse: "collapse",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
  },
  tableHeader: {
    backgroundColor: "#191919",
    color: "#fff",
    padding: "10px",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
  },
  menuItem: {
    borderBottom: "1px solid #ddd",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
  },
  tableData: {
    padding: "10px",
    textAlign: "center",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
  },
  updateButton: {
    padding: "5px 10px",
    backgroundColor: "#ffcc00",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#ff3300",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
  },
  image: {
    borderRadius: "4px",
  },
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
  },
  closeButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#191919",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontFamily: "Josefin Sans",
    fontWeight: "normal",
    marginTop: "10px",
  },
  scrollContainer: {
    overflowY: "auto",
    maxHeight: "300px",
    marginTop: "20px",
  },
};

export default AdminMenu;
