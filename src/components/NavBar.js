import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar__item">
          <h4>Home</h4>
        </div>
      </Link>

      <div className="navbar__item">
        <h4>About us</h4>
      </div>
      <Link to="/login">
        <div className="navbar__item">
          <h4>LogIn</h4>
        </div>
      </Link>

      <div className="navbar__item">
        <h4>Contact us</h4>
      </div>
      <Link to="/entry">
        <div className="navbar__item">
          <h4>Entry</h4>
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
