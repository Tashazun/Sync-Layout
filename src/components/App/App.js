import React, { Component } from "react";

import "./App.scss";

// import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <header className="App-Header">Header</header>
        <section className="App-sidebar">Sidebar</section>
        <section classNae="App-page">
          <div>Overview</div>
          <ul>
            <li />
            <li />
            <li />
            <li />
          </ul>
        </section>
        <footer className="App-footer">
          <p>footer</p>
        </footer>
      </div>
    );
  }
}

export default App;
