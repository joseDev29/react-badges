import React from "react";
import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div>
          <img src={header} alt="logo" />
        </div>
        <div>
          <Badge
            name="Jose Miguel"
            lastname="Ortiz Catrillón"
            description="Estudiante de Ingenieria de Sistemas en la U Caldas"
            user="@joseuDev29"
          />
          <BadgeForm />
        </div>
      </>
    );
  }
}

export default BadgeNew;
