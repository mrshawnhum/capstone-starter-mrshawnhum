import PropTypes from "prop-types";
import React from "react";

import { NavLink } from "react-router-dom";
// import petClient from "./backend/test.mjs";
export class Home extends React.Component {
  static PropType = {
    pets: [],
    val: PropTypes.number,
  };

  handleChange = ({ target }) => {
    console.log(target.value);
  };

  // async componentDidMount() {
  //   const { animals } = await petClient();
  //   this.setState({ pets: animals });
  // }

  render() {
    return (
      <div>
        <p>testing home page</p>
        <label htmlFor=""></label>
        <input type="radio" onChange={this.handleChange} />
      </div>
    );
  }
}
