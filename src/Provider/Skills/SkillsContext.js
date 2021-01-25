import axios from "axios";
import React, { createContext, useEffect, useState, useContext } from "react";
import { SERVER } from "../../global";
import { AppContext } from "../App/AppContext";

export const SkillsContext = createContext();

const SkillsContextProvider = (props) => {
  const [skills, setSkills] = useState([]);

  const appContext = useContext(AppContext);
  const { loaded, setLoading } = appContext;

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    setLoading();

    const { data } = await axios.get(`${SERVER}/skills`);
    setSkills(data);

    loaded();
  };

  return (
    <SkillsContext.Provider value={skills}>
      {props.children}
    </SkillsContext.Provider>
  );
};

export default SkillsContextProvider;
