import React, { Suspense } from "react";
import "./App.css";

import { HashRouter } from "react-router-dom";
import AboutContextProvider from "./Provider/About/AboutContext";
import EducationContextProvider from "./Provider/Education/EducationContext";
import SkillsContextProvider from "./Provider/Skills/SkillsContext";
import InterestsContextProvider from "./Provider/Interests/InterestsContext";
import Layout from "./Components/Layout/Layout";
import AppContextProvider from "./Provider/App/AppContext";
import ProjectsContextProvider from "./Provider/Project/ProjectContext";

function App() {
  return (
    <HashRouter hashType="noslash">
      <AppContextProvider>
        <AboutContextProvider>
          <EducationContextProvider>
            <SkillsContextProvider>
              <InterestsContextProvider>
                <ProjectsContextProvider>
                  <Suspense fallback={<div>...</div>}>
                    <div className="App">
                      <Layout></Layout>
                    </div>
                  </Suspense>
                </ProjectsContextProvider>
              </InterestsContextProvider>
            </SkillsContextProvider>
          </EducationContextProvider>
        </AboutContextProvider>
      </AppContextProvider>
    </HashRouter>
  );
}

export default App;
