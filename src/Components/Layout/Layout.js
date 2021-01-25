import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { AppContext } from "../../Provider/App/AppContext";
import Routes from "../../Router/Router";
import Loading from "../Loading/Loading";
import Nav from "../Nav/Nav";

const Layout = (props) => {
  const appContext = useContext(AppContext);

  const { loading } = appContext;

  let Loader = "";
  if (loading) {
    Loader = <Loading />;
  }

  return (
    <>
      <Nav />
      {Loader}
      <div className="container-fluid p-0">
        <Switch>
          {Routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </div>
    </>
  );
};

export default Layout;
