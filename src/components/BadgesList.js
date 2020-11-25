import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");
  const [filteredBadges, setFilteredBadges] = React.useState(badges);
  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const { query, setQuery, filteredBadges } = useSearchBadges(props.badges);
  if (filteredBadges.length <= 0) {
    return (
      <>
        <div className="badgeslist__search">
          <label htmlFor="badgeslist__search-input">Filter Badges: </label>
          <input
            type="text"
            name="badgeslist__search-input"
            id="badgeslist__search-input"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h1>Aun no se han creado badges, Se el primero en crear</h1>;
      </>
    );
  }
  return (
    <>
      <div className="badgeslist__search">
        <label htmlFor="badgeslist__search-input">Filter Badges: </label>
        <input
          type="text"
          name="badgeslist__search-input"
          id="badgeslist__search-input"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="badgeslist">
        <h2 className="badgeslist__title">Members</h2>
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className="badgeslist__li">
              <Link to={`/badges/${badge.id}`} className="badgeslist__li-link">
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
    </>
  );
}

export default BadgesList;
