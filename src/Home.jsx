import React, { Component } from "react";
import "../styles/home.css";

class Home extends Component {
  render() {
    return (
      <div className="home__content">
        <span className="home__content--span">Bikes are our <span>passion</span></span>

        <footer className="home__footer">
        <h4>design and coding &copy; 2018 <a href="https://www.echobanda.pl" className="home__footer--link">echobanda</a></h4>
        </footer>
        </div>

    );
  }
}

export default Home;
