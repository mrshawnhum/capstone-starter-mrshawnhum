import "bulma/css/bulma.css";
import PropTypes from "prop-types";
import React from "react";

import "./Nav.css";

export class Nav extends React.Component {
  render() {
    return (
      <div className="tabs">
        <ul>
          <li className="is-active">
            <a>Home</a>
          </li>
          <li>
            <a>Rescue Match</a>
          </li>
          <li>
            <a>Rescue Pets Near Me</a>
          </li>
        </ul>
      </div>
    );
  }
}
