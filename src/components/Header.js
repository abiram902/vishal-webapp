import React from "react";
import "./Header.css";
import logo from "./vrr.logo.png";

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="vrr" className="Header__logo" />
      <h1 className="Header__title">Vishal Royal Roadlines</h1>
    </div>
  );
}

export default Header;
