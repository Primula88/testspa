import React, { Component } from "react";
import {
  Route,
  Routes,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import ToDoDisplay from "./components/toDoDisplay.js";
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
            <li><NavLink to="/tododisplay">To Do</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/feeddisplay">Reddit Feed</NavLink></li>
          </ul>
          <div className="content">
          <Routes> 
          <Route exact path="/" element={<Home />} />
          <Route path="/ToDoDisplay" element={<ToDoDisplay />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/FeedDisplay" element={<FeedDisplay />}/>
          </Routes>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;