import axios from "axios";
import React, { createContext, useEffect, useState, useContext } from "react";
import { SERVER } from "../../global";
import { AppContext } from "../App/AppContext";

export const EducationContext = createContext();

const EducationContextProvider = (props) => {
  const appContext = useContext(AppContext);
  const { loaded, setLoading } = appContext;

  const [education, setEducation] = useState([]);

  useEffect(() => {
    getEducation();
  }, []);

  const getEducation = async () => {
    setLoading();

    const { data } = await axios.get(`${SERVER}/education`);
    setEducation(data);

    loaded();
  };

  return (
    <EducationContext.Provider value={education}>
      {props.children}
    </EducationContext.Provider>
  );
};

export default EducationContextProvider;
