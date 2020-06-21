import React, { Fragment } from "react";

import "./App.css";
import { Home, Login, Main } from "components";

export const App = () => (
  <Fragment>
    {<Main />}
    {<Login />}
    {<Home />}
  </Fragment>
);
