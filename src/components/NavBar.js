import React from "react";
import { Link } from "react-scroll";
import { Link as Linf } from "react-router-dom";
import "./NavBar.css";
import logo from "./vrrLogo.png";
function NavBar() {
  return (
    <div className="navbar">
      <Linf to="/" style={{ textDecoration: "none" }}>
        <div className="nav__logo">
          <img src={logo} alt="rr" className="logo" />
          <h3>Vishal Royal Roadlines</h3>
        </div>
      </Linf>

      <div className="nav__buttons">
        <Link smooth to="aboutUs" duration={300}>
          <div className="navbar__item">
            <h4>About us</h4>
          </div>
        </Link>

        {/* <Link smooth to="section2" duration={300} delay={0}>
          <div className="navbar__item">
            <h4>LogIn</h4>
          </div>
        </Link> */}
        <Link smooth to="contactUs">
          <div className="navbar__item">
            <h4>Contact us</h4>
          </div>
        </Link>

        <Linf to="/entry" style={{ textDecoration: "none" }}>
          <div className="navbar__item">
            <h4>Entry</h4>
          </div>
        </Linf>
      </div>
    </div>
  );
}

export default NavBar;
