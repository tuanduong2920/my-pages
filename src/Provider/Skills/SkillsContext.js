import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { SERVER } from "../../global";

export const SkillsContext = createContext();

const SkillsContextProvider = (props) => {
    
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills();
  }, []);

  const getSkills = async () => {
    const { data } = await axios.get(`${SERVER}/skills`);
    setSkills(data);
  };

  return (
    <SkillsContext.Provider value={skills}>
      {props.children}
    </SkillsContext.Provider>
  );
};

export default SkillsContextProvider;
