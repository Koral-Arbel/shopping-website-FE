import React from "react";
import Login from "./components/registration/Login";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./components/context/AuthProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </>
  );
}
export default App;
