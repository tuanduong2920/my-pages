import React, { Suspense } from "react";
import "./App.css";

import Nav from "./Components/Nav/Nav";

import Routes from "./Router/Router";

import { Switch, Route, HashRouter } from "react-router-dom";
import AboutContextProvider from "./Provider/About/AboutContext";
import EducationContextProvider from "./Provider/Education/EducationContext";
import SkillsContextProvider from "./Provider/Skills/SkillsContext";
import InterestsContextProvider from "./Provider/Interests/InterestsContext";

function App() {
  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch("http://localhost:5000/about");
  //   const dataJson = await data.json();
  //   console.log(dataJson);
  // };

  return (
    <HashRouter hashType="noslash">
      <AboutContextProvider>
        <EducationContextProvider>
          <SkillsContextProvider>
            <InterestsContextProvider>
              <Suspense fallback={<div >Loading...</div>}>
                <div className="App">
                  <Nav />
                  <div className="container-fluid p-0">
                    <Switch>
                      {Routes.map((route) => (
                        <Route
                          key={route.path}
                          path={route.path}
                          component={route.component}
                          exact={route.exact}
                        />
                      ))}
                    </Switch>
                  </div>
                </div>
              </Suspense>
            </InterestsContextProvider>
          </SkillsContextProvider>
        </EducationContextProvider>
      </AboutContextProvider>
    </HashRouter>
  );
}

export default App;
