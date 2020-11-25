import React from "react";
import { Link } from "react-router-dom";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import "./styles/Badges.css";
import api from "../api";

class Badges extends React.Component {
  /*constructor(props) {
    super(props);

    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        info: {},
        results: [],
      },
    };
  }*/

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: null,
      data: undefined,
    };
  }

  componentDidMount() {
    console.log("Se montará el componente");
    this.fetchData();
    //this.fetchCharacters();
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Se actualizará el componente");
    console.log("prev props and state", {
      prevProps: prevProps,
      prevState: prevState,
    });

    console.log("actual props and state", {
      props: this.props,
      state: this.state,
    });
  }

  componentWillUnmount() {
    console.log("Se desmontará el componente");
    clearInterval(this.intervalId);
  }

  /*fetchCharacters = async () => {
    this.setState({
      loading: true,
      error: null,
    });

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({
          loading: false,
          data: {
            info: data.info,
            results: [].concat(this.state.data.results, data.results),
          },
          nextPage: this.state.nextPage + 1,
        });
      } else {
        throw new Error("Data no encontrada");
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error,
      });
    }
  };*/

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      console.log("data: ", data.length);
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    if (this.state.loading && !this.state.data) {
      return <PageLoading />;
    }
    return (
      <div className="badges">
        <Link to="/badges/new" className="badges__link">
          New Badge
        </Link>

        <div className="badges__badgeslist">
          <BadgesList badges={this.state.data} />
          {this.state.loading && <h1>Loading...</h1>}
        </div>
      </div>
    );
  }
}

export default Badges;

/*
{!this.state.loading && (
          <button
            type="button"
            className="badges__link"
            onClick={() => this.fetchCharacters()}
          >
            more...
          </button>
        )}
*/

/* 
{this.state.loading && <h1>Loading</h1>}
*/
