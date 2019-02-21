import React, { Component } from "react";
import Jumbo from "../components/Jumbo";
import Features from "../components/Features";

class Main extends Component {
  render() {
    console.table(this.props.top20);
    if (this.props.top20 !== undefined) {
      return (
        <div>
          <Jumbo movies={this.props.top20} />
          <Features movies={this.props.top20} />
        </div>
      );
    } else {
      return (
        <div>
          <p>No movies to display</p>
        </div>
      );
    }
  }
}

export default Main;
