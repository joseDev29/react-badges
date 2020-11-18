import React from "react";
import { Link } from "react-router-dom";
import logo404 from "../images/notfound-logo.svg";
import "./styles/NotFound.css";

function NotFound() {
  return (
    <div className="notfound">
      <h1 className="notfound__text">Error!</h1>
      <img src={logo404} className="notfound__img" />
      <div className="notfound__links">
        <Link to="/badges" className="notfound__links-item">
          Badges
        </Link>
        <Link to="/badges/new" className="notfound__links-item">
          New Badge
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
