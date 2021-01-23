import axios from "axios";
import React, { createContext, useState, useEffect } from "react";
import { SERVER } from "../../global";

export const AboutContext = createContext();

const AboutContextProvider = (props) => {
  const [about, setAbout] = useState({});

  useEffect(() => {
    getDataAbout();
  }, []);

  const getDataAbout = async () => {
    const { data } = await axios.get(`${SERVER}/about`);

    setAbout(data);
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
