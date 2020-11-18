import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/house-logo.svg";
import "./styles/Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <header className="navbar">
        <Link to="/" className="navbar__link">
          <img src={logo} alt="logo" className="navbar__link-img" />
          <span className="navbar__link-span">Home</span>
        </Link>
      </header>
    );
  }
}

export default Navbar;
