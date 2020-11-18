import React from "react";
import "./styles/Badge.css";
import headerLogo from "../images/badge-header-logo.svg";
import avatar from "../images/avatar.svg";

class Badge extends React.Component {
  render() {
    const props = this.props;

    return (
      <div className="badge">
        <div className="badge__header">
          <img src={headerLogo} className="badge__header-logo" />
          <h2 className="badge__header-title">TechLover!</h2>
        </div>
        <div className="badge__main">
          <img className="badge__main-avatar" src={avatar} alt="" />
          <div className="badge__main-content">
            <h1 className="badge__main-content-name">
              {props.name} <br /> {props.lastName}
            </h1>
            <p className="badge__main-content-description">
              {props.description}
            </p>
            <p className="badge__main-content-nickname">{props.user}</p>
          </div>
        </div>
        <div className="badge__footer">
          <span>#LearnReactJS</span>
        </div>
      </div>
    );
  }
}

export default Badge;
