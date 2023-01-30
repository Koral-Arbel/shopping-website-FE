import React, { useState, userEffect } from "react";
import Login from "./components/registration/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./components/context/AuthProvider";
import Footer from "./components/Footer";

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
        </Routes>
        <Footer />
      </AuthProvider>
    </>
  );
}
export default App;
