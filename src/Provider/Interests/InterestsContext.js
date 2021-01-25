import axios from "axios";
import React, { createContext, useEffect, useState,useContext } from "react";
import { SERVER } from "../../global";
import { AppContext } from "../App/AppContext";

export const InterestsContext = createContext();

const InterestsContextProvider = (props) => {
  const [interrests, setInterests] = useState({});

  const appContext = useContext(AppContext);
  const { loaded, setLoading } = appContext;

  useEffect(() => {
    getInterests();
  }, []);

  const getInterests = async () => {
    setLoading();

    const { data } = await axios.get(`${SERVER}/interests`);
    setInterests(data);

    loaded();
  };

  return (
    <InterestsContext.Provider value={interrests}>
      {props.children}
    </InterestsContext.Provider>
  );
};

export default InterestsContextProvider;
