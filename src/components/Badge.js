import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import avatar from "../images/avatar.svg";

class Badge extends React.Component {
  render() {
    const props = this.props;

    return (
      <div className="Badge">
        <div className="BadgeHeader">
          <img
            className="BadgeHeader-img"
            src={confLogo}
            alt="Imagen platzi conf"
          />
        </div>
        <div className="BadgeMain">
          <img className="BadgeMain-avatar" src={avatar} alt="" />
          <div className="BadgeMain-content">
            <h1>
              {props.name} <br /> {props.lastName}
            </h1>
            <p>{props.description}</p>
            <p>{props.user}</p>
          </div>
        </div>
        <div className="BadgeFooter">
          <span>#AprendeReact</span>
        </div>
      </div>
    );
  }
}

export default Badge;
