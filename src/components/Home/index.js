import PropTypes from "prop-types";
import React from "react";

export class Home extends React.Component {
  static PropType = {
    val: PropTypes.number,
  };

  handleChange = ({ target }) => {
    console.log(target.value);
  };

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
