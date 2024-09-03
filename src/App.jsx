import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import ChatBot from "../src/page/ChatbotRasa";

//HALAMAN USER
import HalamanUtama from "./page/HalamanUtama";
import Home from "./page/HalamanBeranda";
import TentangKami from "./page/HalamanTentangKami";
import Menu from "./page/HalamanMenu";
import Pemesanan from "./page/HalamanPemesananUser";
import Pembayaran from "./page/HalamanPembayaran";
import PembayaranSuccess from "./page/HalamanPembayaranSuccess";
import Kontak from "./page/HalamanKontak";
import KebijakanPrivasi from "./page/HalamanKebijakanPrivasi";

//HALAMAN ADMIN
import Register from "./page/HalamanRegisterAdmin";
import Login from "./page/HalamanLoginAdmin";
import Order from "./page/HalamanPesananAdmin";
import Ulasan from "./page/HalamanUlasan";
import Dashboard from "./page/HalamanDashboard";
import Produk from "./page/HalamanProduk";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* User */}
        <Route path="/" element={<HalamanUtama />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tentangkami" element={<TentangKami />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/pemesanan" element={<Pemesanan />} />
        <Route path="/pembayaran" element={<Pembayaran />} />
        <Route path="/pembayaransuccess" element={<PembayaranSuccess />} />
        <Route path="/kontak" element={<Kontak />} />
        <Route path="/kebijakan" element={<KebijakanPrivasi />} />

        {/* Admin */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/pesanan"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route path="/produk" element={<Produk />} />
        <Route path="/ulasan" element={<Ulasan />} />
      </Routes>
    </Router>
  );
};

export default App;
