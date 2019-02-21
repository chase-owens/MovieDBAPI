import React, { Component } from "react";
import "../styles/features.css";

class Features extends Component {
  filePath = "http://image.tmdb.org/t/p/w185";
  render() {
    return (
      <div id="features">
        {this.props.movies.map((movie, i) => (
          <div class="feature" key={i}>
            <img src={this.filePath + movie.poster_path} alt="movie-poster" />
            <p>{movie.title}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Features;
