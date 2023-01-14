import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link class="navbar-brand" href="#">
        Shopping <br></br>with Koral
      </Link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home <span class="sr-only"></span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="#">
              Link
            </Link>
          </li>
          <li class="nav-item dropdown">
            <Link
              class="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              popup="true"
              aria-expanded="false"
            >
              Dropdown
            </Link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="#">
                Action
              </Link>
              <Link class="dropdown-item" to="#">
                Another action
              </Link>
              <Link class="dropdown-divider"></Link>
              <Link class="dropdown-item" to="#">
                Something else here
              </Link>
            </div>
          </li>
          <li class="nav-item">
            <Link class="nav-link disabled" to="#">
              Disabled
            </Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control m-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
