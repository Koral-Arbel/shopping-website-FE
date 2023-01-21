import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-4">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/">
            Shop with Koral
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <nav className="nav-item active">
                <Link className="nav-link" to="/home">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </nav>
              <nav className="nav-item">
                <Link className="nav-link" to="/item">
                  {" "}
                  Items
                </Link>
              </nav>
              <nav className="nav-item">
                <Link className="nav-link" to="/favoriteItem">
                  {" "}
                  Favorite Item
                </Link>
              </nav>
              <nav className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </nav>
            </ul>
            <div className="buttons">
              <Link to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1">Login</i>
              </Link>
              <Link to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1">Register</i>
              </Link>
              <Link to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1">Cart (0)</i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? CustomLink.active : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
