import React from "react";
import "./styles/PageError.css";

class PageError extends React.Component {
  render() {
    return (
      <div class="error">
        <h1>{`${this.props.error}`}</h1>
      </div>
    );
  }
}

export default PageError;
