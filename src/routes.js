import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Home } from "./components";

export const Routes = () => (
  <Switch>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
  </Switch>
);
