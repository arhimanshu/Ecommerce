import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";

function Header() {
  return (
    <div className="header p-1 text-center">
      <nav className="header navbar navbar-expand-lg bg-body-tertiary">
        <div className="header container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand text-white">
              <GiShoppingBag /> Ecommerce
            </Link>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link text-white" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Category" className="nav-link text-white">
                  Category
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link text-white">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Login" className="nav-link text-white" aria-current="page">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Register" className="nav-link text-white" aria-current="page">
                  Signup
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Cart" className="nav-link text-white" aria-current="page">
                  Cart:(0)
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
