import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import  Home  from "./Home.jsx";
import  Services  from "./Services.jsx";
import  Contact  from "./Contact.jsx";
import { IndexLink, Link } from 'react-router-dom';
import "../styles/main.css";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>

          <h1>ECB</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/services" component={Services}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
