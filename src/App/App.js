import React, { Component } from "react";

import "./App.scss";
import Logo from "../assets/BASALT_master_main.svg";
import HeroSm from "../assets/hero-small.png";
import Gear from "../assets/002-settings.svg";
import Book from "../assets/001-reader.svg";
import Shield from "../assets/003-firewall.svg";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <header className="App-header">
          <img id="logo" src={Logo} alt="Basalt" />
          <ul id="nav-buttons">
            <li id="home">Home</li>
            <li id="phone">Phone</li>
            <li id="et">ET</li>
          </ul>
        </header>
        <section className="App-page">
          <img id="hero" src={HeroSm} alt="Pile of blocks" />
          <div id="overlay">
            <h1>Design Systems</h1>
            <h2>Find Out More</h2>
            <div id="ellipsis">
              <div id="dot1" className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>
          <div id="info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              venenatis nibh vitae ipsum hendrerit convallis. Aenean id sapien
              vel purus bibendum cursus vel in arcu. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Aliquam erat volutpat. Donec vulputate lobortis sodales. Donec
              hendrerit, magna nec gravida sagittis, purus ipsum finibus odio,
              id tincidunt magna diam nec lacus. In convallis mi sit amet
              elementum mollis. Ut nec pellentesque nulla. Vivamus ultrices
              augue elit, eget scelerisque nisl pulvinar nec. Nulla vulputate,
              mauris non vestibulum elementum, lectus magna viverra ipsum, a
              fringilla eros nunc porta eros.
            </p>
          </div>
        </section>
        <section className="App-blurbs">
          <article id="basalt">
            <img id="book" src={Book} alt="Book" />
            <h3>Basalt</h3>
            <p>
              Ut id nulla urna. In at vestibulum mi, ac placerat augue. Maecenas
              pretium rhoncus dictum.
            </p>
          </article>
          <article id="tech">
            <img id="gear" src={Gear} alt="Gear" />
            <h3>Tech</h3>
            <p>Quisque mi neque, rutrum a tempor sagittis, aliquet ut velit.</p>
          </article>
          <article id="challenge">
            <img id="shield" src={Shield} alt="Shield" />
            <h3>challenge</h3>
            <p>
              Curabitur malesuada magna neque, vitae feugiat eros molestie
              vitae.{" "}
            </p>
          </article>
        </section>
        <footer className="App-footer">
          <p>&copy; Tasha Zuniga, All Rights Reserved</p>
        </footer>
      </div>
    );
  }
}

export default App;
