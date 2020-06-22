import "bulma/css/bulma.css";
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

export class Nav extends React.Component {
  render() {
    return (
      <nav className="tabs">
        <ul>
          <Link to="/">
            <li className="is-active">Home</li>
          </Link>
          <Link to="/dogs">
            <li>Dogs</li>
          </Link>
          <Link to="/cats">
            <li>Cats</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
        </ul>
      </nav>
    );
  }
}
