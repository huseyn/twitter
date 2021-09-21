import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";

const Landing = () => {
  const { path } = useRouteMatch();
  console.log(`${path}home`);

  return (
    <>
      <h2>Landing</h2>
      <Switch>
        <Route path={`${path}home`} component={Home} />
        <Route path={`${path}profile`} component={Profile} />
      </Switch>
    </>
  );
};

export default Landing;
