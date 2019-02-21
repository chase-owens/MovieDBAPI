import React, { Component } from "react";
import "../styles/nav.css";

class Nav extends Component {
  render() {
    return (
      <nav id="nav">
        <div>
          <p id="brand-name">Flic</p>
        </div>
        <div id="nav-buttons">
          <p class="nav-button">Cinema</p>
          <p class="nav-button">VR</p>
        </div>
      </nav>
    );
  }
}

export default Nav;
