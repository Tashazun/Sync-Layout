import React, { Component } from "react";

import "./App.scss";
import Logo from "../assets/BASALT_master_main.svg";
import Hero from "../assets/hero.png";

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
          <img id="hero" src={Hero} alt="Pile of blocks" />
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
              fringilla eros nunc porta eros. In cursus faucibus mi nec
              eleifend. Nullam scelerisque blandit nunc eget ornare. Proin quis
              lorem aliquet, venenatis lorem eget, porta felis. Aliquam laoreet
              lacus eget tortor dapibus, non mollis lorem faucibus.
            </p>
          </div>
        </section>
        <footer>Tasha Zuniga</footer>
      </div>
    );
  }
}

export default App;
