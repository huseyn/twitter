import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "./styles";

import Routes from "@routing/Routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route component={Routes} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
