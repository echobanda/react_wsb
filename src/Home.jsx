import React, { Component } from "react";
import "../styles/home.css";

class Home extends Component {
  render() {
    return (
      <div className="home__content">
        <span>bikes are our passion</span>

        <footer>
        <h4>design and coding &copy; 2018 <a href="https://www.echobanda.pl" className="footer__main--link">echobanda</a></h4>
        </footer>
        </div>

    );
  }
}

export default Home;
