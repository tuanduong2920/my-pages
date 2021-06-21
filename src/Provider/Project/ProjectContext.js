import axios from "axios";
import React, { createContext, useEffect, useState,useContext } from "react";
import { SERVER } from "../../global";
import { AppContext } from "../App/AppContext";

export const ProjectContext = createContext();

const ProjectsContextProvider = (props) => {
  const [projects, setProjects] = useState([]);

  const appContext = useContext(AppContext);
  const { loaded, setLoading } = appContext;

  useEffect(() => {
    getProject();
  }, []);

  const getProject = async () => {
    setLoading();

    const { data } = await axios.get(`${SERVER}/project`);
    setProjects(data);

    loaded();
  };

  return (
    <ProjectContext.Provider value={projects}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectsContextProvider;
