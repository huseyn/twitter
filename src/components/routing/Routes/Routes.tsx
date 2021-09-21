import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "@pages/Layout";
import SignIn from "@pages/SignIn";
import SignUp from "@pages/SignUp";

const Routes = () => (
  <Switch>
    <Route path='/signin' component={SignIn} />
    <Route path='/signup' component={SignUp} />
    <Route path='/' component={Landing} />
  </Switch>
);

export default Routes;
