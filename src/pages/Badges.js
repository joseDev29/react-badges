import React from "react";
import { Link } from "react-router-dom";
import BadgesList from "../components/BadgesList";
import "./styles/Badges.css";

class Badges extends React.Component {
  state = {
    data: [
      {
        id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
        firstName: "Annie",
        lastName: "Leonhart",
        email: "annie.leon@gmail.com",
        description: "Fontend Developer",
        nickname: "annieLeon97",
        avatarUrl:
          "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
      },
      {
        id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
        firstName: "Killua",
        lastName: "Zoldyck",
        email: "killuZ@hotmail.com",
        description: "Architec",
        nickname: "kylluZoldyck29",
        avatarUrl:
          "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
      },
      {
        id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
        firstName: "Edward",
        lastName: "Elrick",
        email: "edofmab@hotmail.com",
        description: "Alchemist",
        nickname: "edoElrick56",
        avatarUrl:
          "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
      },
    ],
  };
  render() {
    return (
      <div className="badges">
        <Link to="/badges/new" className="badges__link">
          New Badge
        </Link>
        <div className="badges__badgeslist">
          <BadgesList badges={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Badges;
