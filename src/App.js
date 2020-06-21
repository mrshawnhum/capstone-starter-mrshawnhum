import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Home, Login, Main } from "components";

export const App = () => (
  <Router>
    <Fragment>
      {<Main />}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" component={Login} />
      </Switch>
    </Fragment>
  </Router>
);
