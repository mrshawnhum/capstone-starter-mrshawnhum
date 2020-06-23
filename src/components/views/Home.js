import PropTypes from "prop-types";
import React from "react";

import { NavLink } from "react-router-dom";
// import petClient from "./backend/test.mjs";

export class Home extends React.Component {
  handleChange = ({ target }) => {
    console.log(target.value);
  };

  render() {
    return (
      <div>
        <p>testing home page</p>
        <label htmlFor=""></label>
        <input type="radio" label="test" onChange={this.handleChange} />
      </div>
    );
  }
}
