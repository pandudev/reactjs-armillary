import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./container/home/home";
import Detail from "./container/detail/detail";
import Repository from "./container/repository/repository";
import GlobalProvider from "./context/context";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Route path="/" exact component={Home}></Route>
          <Route path="/:username" exact component={Repository}></Route>
          <Route
            path="/:username/repository/:projectName"
            component={Detail}
          ></Route>
        </Router>
      </div>
    );
  }
}

export default GlobalProvider(App);
