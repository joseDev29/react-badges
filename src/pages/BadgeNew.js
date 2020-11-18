import React from "react";
import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      nickname: "",
      description: "",
    },
  };

  handleChange = (e) => {
    /* Metodo 1 para que no se reseteen los estados
    const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value;
    this.setState({w
      form: nextForm,
    });*/

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <>
        <div className="badge-new">
          <div className="badge-new__badge">
            <Badge
              name={this.state.form.firstName}
              lastName={this.state.form.lastName}
              description={this.state.form.description}
              user={this.state.form.nickname}
            />
          </div>
          <div className="badge-new__form">
            <BadgeForm
              onChange={this.handleChange}
              formValues={this.state.form}
            />
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
