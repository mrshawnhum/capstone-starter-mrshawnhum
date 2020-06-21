import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Home, Login } from "./components";

export const Routes = () => (
  <Switch>
    <Route exact path="/home">
      <Home />
    </Route>
    <Route exact path="/">
      <Redirect to="/home" />
    </Route>
    <Route exact path="/login">
      <Redirect to="/login" />
      <Login />
    </Route>
  </Switch>
);
