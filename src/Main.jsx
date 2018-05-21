import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import  Home  from "./Home.jsx";
import  Workshop  from "./Workshop.jsx";
import  Manifesto  from "./Manifesto.jsx";
import  Build  from "./Build.jsx";
import  About  from "./About.jsx";
import  Contact  from "./Contact.jsx";

import { IndexLink, Link } from 'react-router-dom';
import "../styles/main.css";
import "../styles/styles.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="main">
          <ul className="header">
            <li><NavLink exact to="/">HOME</NavLink></li>
            <li><NavLink to="/workshop">WORKSHOP</NavLink></li>
            <li><NavLink to="/manifesto">MANIFESTO</NavLink></li>
            <li><NavLink to="/build">BUILD</NavLink></li>
            <li><NavLink to="/about">ABOUT</NavLink></li>
            <li><NavLink to="/contact">CONTACT</NavLink></li>
            <li><NavLink to="/map">MAP</NavLink></li>

            <li><a href="mailto:mechanic@workshop.com" className="header__main--link"><i className="fas fa-envelope"></i></a></li>
            <li><a href='http://tumblr.com' className="header__main--link"><i className="fab fa-tumblr-square"></i></a></li>
            <li><a href='http://instagram.com' className="header__main--link"><i className="fab fa-instagram"></i></a></li>
            <li><a href='http://twitter.com' className="header__main--link"><i className="fab fa-twitter-square"></i></a></li>
            <li><a href='http://facebook.com' className="header__main--link"><i className="fab fa-facebook"></i></a></li>
          </ul>
          <div className="main__content">
            <Route exact path="/" component={Home}/>
            <Route path="/workshop" component={Workshop}/>
            <Route path="/manifesto" component={Manifesto}/>
            <Route path="/build" component={Build}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/map" component={Map}/>

          </div>

        </div>
      </HashRouter>
    );
  }
}
export default Main;
