import React from "react";
import "./App.css";

import Nav from "./Components/Nav/Nav";

import Routes from "./Router/Router";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="container-fluid p-0">
          <Switch>
            {Routes.map(route => <Route key={route.path} path={route.path} component={route.component} exact={route.exact} />)}
          </Switch>
          {/* <About />
          <Education />
          <Skill />
          <Interests /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
