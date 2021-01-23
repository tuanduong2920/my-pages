import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { SERVER } from "../../global";

export const EducationContext = createContext();

const EducationContextProvider = (props) => {
  const [education, setEducation] = useState([]);

  useEffect(() => {
    getEducation();
  }, []);

  const getEducation = async () => {
    const { data } = await axios.get(`${SERVER}/education`);
    setEducation(data);
  };

  return (
    <EducationContext.Provider value={education}>
      {props.children}
    </EducationContext.Provider>
  );
};

export default EducationContextProvider;
