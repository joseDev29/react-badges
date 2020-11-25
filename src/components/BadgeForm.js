import React from "react";
import Badge from "./Badge";
import "./styles/BadgeForm.css";

class BadgeForm extends React.Component {
  /*handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  */
  handleClick = (e) => {
    console.log("Hubo un click");
  };

  /*handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };*/

  render() {
    return (
      <form className="badge-form" onSubmit={this.props.onSubmit}>
        <h3 className="badge-form__title">{this.props.formTitle}</h3>
        <label className="badge-form__label">First Name</label>
        <input
          onChange={this.props.onChange}
          type="text"
          name="firstName"
          value={this.props.formValues.firstName}
          className="badge-form__input-text"
          maxLength={30}
        />

        <label className="badge-form__label">Last Name</label>
        <input
          onChange={this.props.onChange}
          type="text"
          name="lastName"
          value={this.props.formValues.lastName}
          className="badge-form__input-text"
          maxLength={30}
        />

        <label className="badge-form__label">Description</label>
        <input
          onChange={this.props.onChange}
          type="text"
          name="description"
          value={this.props.formValues.description}
          className="badge-form__input-text"
          maxLength={50}
        />

        <label className="badge-form__label">Nickname</label>
        <input
          onChange={this.props.onChange}
          type="text"
          name="nickname"
          value={this.props.formValues.nickname}
          className="badge-form__input-text"
          maxLength={30}
        />

        <div className="badge-form__btns">
          <button className="badge-form__btns-item">Save</button>
          <button className="badge-form__btns-item" type="reset">
            Reset
          </button>
        </div>
        {this.props.error && <h1>{`${this.props.error}`}</h1>}
      </form>
    );
  }
}

export default BadgeForm;
/*
<button
            type="button"
            onClick={this.handleClick}
            className="badge-form__btns-item"
          >
            Save
          </button>
*/
