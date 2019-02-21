import React, { Component } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import "./App.css";

class App extends Component {
  state = {
    top20: []
  };

  componentDidMount() {
    this.getPopularMovies();
  }

  render() {
    return (
      <div>
        <Nav />
        <Main top20={this.state.top20} />
      </div>
    );
  }

  setMovies(response) {
    console.log(response);
  }

  getPopularMovies() {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=20cd70ce9c3148c2d39b0f390f107b67`
    )
      .then(response => response.json())
      .then(
        response => this.setState({ top20: response.results }),
        console.table(this.state.top20)
      )
      .catch(err => console.log("ERR: ", err));
  }
}

export default App;
