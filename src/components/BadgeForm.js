import React from "react";
import Badge from "./Badge";

class BadgeForm extends React.Component {
  handleChange = (e) => {
    console.log(e.target.value);
  };
  handleClick = (e) => {
    console.log("Hubo un click");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("casi se envia");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="">Name</label>
        <input onChange={this.handleChange} type="text" />

        <button type="button" onClick={this.handleClick}>
          Save
        </button>
        <button>submmit</button>
      </form>
    );
  }
}

export default BadgeForm;
