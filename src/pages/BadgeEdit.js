import React from "react";
import "./styles/BadgeEdit.css";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";
import api from "../api";
import avatar from "../images/avatar.svg";

class BadgeEdit extends React.Component {
  state = {
    loadingPage: true,
    loadingForm: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      nickname: "",
      description: "",
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loadingPage: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({
        loadingPage: false,
        form: {
          firstName: data.firstName,
          lastName: data.lastName,
          nickname: data.twitter,
          description: data.jobTitle,
        },
      });
    } catch (error) {
      this.setState({ loadingPage: false, error: error });
    }
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

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loadingForm: true, error: null });
    try {
      await api.badges.update(this.props.match.params.badgeId, {
        id: `${this.getRandomInt(104544, 2345765)}`,
        firstName: this.state.form.firstName,
        lastName: this.state.form.lastName,
        jobTitle: this.state.form.description,
        twitter: this.state.form.nickname,
        avatarUrl: avatar,
      });
      this.setState({ loadingForm: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loadingForm: false, error: error });
    }
  };

  getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  render() {
    if (this.state.loadingPage) {
      return <PageLoading />;
    }
    return (
      <>
        <div className="badge-edit">
          <div className="badge-edit__badge">
            <Badge
              name={this.state.form.firstName || "Fist Name"}
              lastName={this.state.form.lastName || "Last Name"}
              description={
                this.state.form.description || "Job title or description"
              }
              user={this.state.form.nickname || "@nickname"}
            />
          </div>
          <div className="badge-edit__form">
            {!this.state.loadingForm && (
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formTitle={"Edit Badge"}
                formValues={this.state.form}
                error={this.state.error}
              />
            )}
            {this.state.loadingForm && <PageLoading />}
          </div>
        </div>
      </>
    );
  }
}

export default BadgeEdit;
