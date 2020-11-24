import React from "react";
import { Link } from "react-router-dom";
import homeLogo from "../images/home-logo.svg";
import "./styles/Home.css";

function Home() {
  return (
    <div className="home">
      <img src={homeLogo} className="home__img" />
      <div className="home-text">
        <h1>Welcome to an application</h1>
        <h1>made in React JS</h1>
      </div>
      <div className="home-links">
        <Link to="/badges" className="home-links-item">
          Badges
        </Link>
        <Link to="/badges/new" className="home-links-item">
          New Badge
        </Link>
      </div>
    </div>
  );
}

export default Home;
