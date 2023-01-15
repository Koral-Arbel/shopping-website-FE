import React from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "./AuthContext";
// import sliderImg2 from "../images/slider-img2.jpg";

function Navbar() {
  // const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Shop with Koral
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/order-list">
              Order List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/favorite-items">
              Favorite Items
            </Link>
          </li>
        </ul>
        {/* {user ? (
          <>
            <span className="navbar-text mr-2">Welcome, {user.username}</span>
            <button className="btn btn-secondary" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link className="btn btn-primary" to="/login">
            Login/Signup
          </Link>
        )} */}
      </div>
    </nav>
  );
}

export default Navbar;
