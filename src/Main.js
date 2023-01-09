import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import toDoDisplay from "./components/toDoDisplay.js";
import Contact from "./Contact.js";
import FeedDisplay from "./components/FeedDisplay.js";

 
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/toDoDisplay">To Do</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/FeedDisplay">Reddit Feed</NavLink></li>
          </ul>
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/toDoDisplay" component={toDoDisplay}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/FeedDisplay" component={FeedDisplay}/>
             
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;