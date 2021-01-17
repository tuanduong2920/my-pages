import React from "react";
import "./App.css";

import Nav from "./Components/Nav/Nav";

import Routes from "./Router/Router";

import { BrowserRouter as Router, Switch, Route,HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter hashType="noslash" >
      
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
     
    </HashRouter>
  );
}

export default App;
