import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <ul>
          <Link to="/home" className="link-text">
            Kalvium❤️
          </Link>
        </ul>
      </div>
      <div className="details">
        <ul>
          <Link to="/contacts" className="link-text">
            Contacts
          </Link>
        </ul>
        <ul>
          <Link to="/form" className="link-text">
            Registration Form
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
