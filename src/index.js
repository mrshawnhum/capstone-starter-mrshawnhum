import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { BrowserRouter as Router } from "react-router-dom";

import { Main } from "./components/Main";
import { Routes } from "./routes";

import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <Main />
        <Routes />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
