import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Home, Login, Cats, Dogs } from "./components";

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
    <Route exact path="/dogs">
      <Redirect to="/dogs" />
      <Dogs />
    </Route>
    <Route exact path="/cats">
      <Redirect to="/cats" />
      <Cats />
    </Route>
  </Switch>
);
