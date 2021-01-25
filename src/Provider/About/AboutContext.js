import axios from "axios";
import React, { createContext, useState, useEffect, useContext } from "react";
import { SERVER } from "../../global";
import { AppContext } from "../App/AppContext";

export const AboutContext = createContext();

const AboutContextProvider = (props) => {
  const appContext = useContext(AppContext);
  const { loaded, setLoading } = appContext;
  const [about, setAbout] = useState({});

  useEffect(() => {
    getDataAbout();
  }, []);

  const getDataAbout = async () => {
    setLoading();
    const { data } = await axios.get(`${SERVER}/about`);

    setAbout(data);
    loaded();
  };

  const getCv = async () => {
    const file = await axios.get(`${SERVER}/getcv`, { responseType: "blob" });

    const pdf = new Blob([file.data], { type: "application/pdf" });
    const cvUrl = URL.createObjectURL(pdf);

    window.open(cvUrl, "_blank");
  };

  const aboutContextData = {
    about,
    getCv,
  };

  return (
    <AboutContext.Provider value={aboutContextData}>
      {props.children}
    </AboutContext.Provider>
  );
};

export default AboutContextProvider;
