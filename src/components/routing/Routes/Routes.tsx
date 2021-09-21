import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "@pages/Home";
import Profile from "@pages/Profile";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";

const Routes = () => (
  <Switch>
    <Route path='/home' component={Home} />
    <Route path='/profile' component={Profile} />
    <Route path='/signin' component={SignIn} />
    <Route path='/signup' component={SignUp} />
  </Switch>
);

export default Routes;
