import React, { useState, userEffect } from "react";
import Login from "./components/registration/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Navbar from "./components/pages/Navbar";
import { AuthProvider } from "./components/context/AuthProvider";
import Footer from "./components/pages/Footer";
import Favorite from "./components/pages/Favorite";
import Card from "./components/registration/shop/Card";

function App() {
  const [newOrder, setNewOrder] = useState([]);
  const [availableItems, setAvailableItems] = useState();
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorite />} />
          <Route path="/myCard" element={<Card />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}
export default App;
