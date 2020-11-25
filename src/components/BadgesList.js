import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length <= 0) {
      return <h1>Aun no se han creado badges, Se el primero en crear</h1>;
    }
    return (
      <ul className="badgeslist">
        <h2 className="badgeslist__title">Members</h2>
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="badgeslist__li">
              <Link
                to={`/badges/${badge.id}/edit`}
                className="badgeslist__li-link"
              >
                <img src={badge.avatarUrl} className="badgeslist__li-img" />
                <div className="badgeslist__li-content">
                  <h3 className="badgeslist__li-content-name">
                    {badge.firstName} {badge.lastName}
                  </h3>
                  <p className="badgeslist__li-content-description">
                    {badge.jobTitle}
                  </p>
                  <p className="badgeslist__li-content-nickname">
                    {badge.twitter}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
