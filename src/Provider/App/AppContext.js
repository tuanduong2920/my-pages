import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [appState, setAppState] = useState({
    loading: false,
  });

  const loaded = () => {
    setAppState({
      loading: false,
    });
  };
  const setLoading = () => {
    setAppState({
      loading: true,
    });
  };

  const appContextData = {
    loading: appState.loading,
    loaded,
    setLoading,
  };

  return (
    <AppContext.Provider value={appContextData}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
