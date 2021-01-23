import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { SERVER } from "../../global";

export const InterestsContext = createContext();

const InterestsContextProvider = (props) => {
  const [interrests, setInterests] = useState({});

  useEffect(() => {
    getInterests();
  }, []);

  const getInterests = async () => {
    const { data } = await axios.get(`${SERVER}/interests`);
    setInterests(data);
  };

  return (
    <InterestsContext.Provider value={interrests}>
      {props.children}
    </InterestsContext.Provider>
  );
};

export default InterestsContextProvider;
