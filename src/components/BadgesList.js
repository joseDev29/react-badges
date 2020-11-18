import React from "react";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="badgeslist">
        <h2 className="badgeslist__title">Members</h2>
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="badgeslist__li">
              <img src={badge.avatarUrl} className="badgeslist__li-img" />
              <div className="badgeslist__li-content">
                <h3 className="badgeslist__li-content-name">
                  {badge.firstName} {badge.lastName}
                </h3>
                <p className="badgeslist__li-content-description">
                  {badge.description}
                </p>
                <p className="badgeslist__li-content-nickname">
                  @{badge.nickname}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
