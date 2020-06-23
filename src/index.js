import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import { Routes } from "./Routes";

import "bulma/css/bulma.css";
import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="container">
        <h1>Pet Searcher</h1>
        <Routes />
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
