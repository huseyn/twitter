import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Panel from "@custom/Panel";

import Home from "./components/Home";
import Profile from "./components/Profile";

const Layout = () => {
  const { path } = useRouteMatch();

  return (
    <Panel display='flex'>
      <h2>Layout</h2>
      <Switch>
        <Route path={`${path}home`} component={Home} />
        <Route path={`${path}profile`} component={Profile} />
      </Switch>
    </Panel>
  );
};

export default Layout;
