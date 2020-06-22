import PropTypes from "prop-types";
import React from "react";

import { getAllPets } from "api/";

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
  //   const { animals } = await getAllPets();
  //   this.setState({ pets: animals });
  // }

  render() {
    //  getAllPets();
    return (
      <div>
        <p>testing home page</p>
        <label htmlFor=""></label>
        <input type="radio" label="test" onChange={this.handleChange} />
      </div>
    );
  }
}
