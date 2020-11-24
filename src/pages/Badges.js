import React from "react";
import { Link } from "react-router-dom";
import BadgesList from "../components/BadgesList";
import "./styles/Badges.css";

class Badges extends React.Component {
  constructor(props) {
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
  }

  componentDidMount() {
    console.log("Se montará el componente");
    this.fetchCharacters();
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
  }

  fetchCharacters = async () => {
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
  };

  render() {
    if (this.state.error) {
      return `${this.state.error}`;
    }

    return (
      <div className="badges">
        {this.state.loading && <h1>Loading</h1>}
        <Link to="/badges/new" className="badges__link">
          New Badge
        </Link>

        <div className="badges__badgeslist">
          <BadgesList badges={this.state.data.results} />
        </div>

        {!this.state.loading && (
          <button
            type="button"
            className="badges__link"
            onClick={() => this.fetchCharacters()}
          >
            more...
          </button>
        )}
      </div>
    );
  }
}

export default Badges;
