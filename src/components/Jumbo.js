import React, { Component } from "react";
import Error from "../components/Error";
import "../styles/jumbo.css";
import Jumbotron from "react-bootstrap/Jumbotron";

class Jumbo extends Component {
  filePath = "http://image.tmdb.org/t/p/original";
  render() {
    console.log(this.props.movies);
    if (this.props.movies.length > 0) {
      return (
        <Jumbotron id="jumbotron">
          <h1 id="jumbo-words">{this.props.movies[0].title}</h1>
          <img
            id="jumbo-image"
            src={this.filePath + this.props.movies[0].backdrop_path}
            alt="movie-poster"
          />
        </Jumbotron>
      );
    } else {
      return <Error />;
    }
  }
}

export default Jumbo;
