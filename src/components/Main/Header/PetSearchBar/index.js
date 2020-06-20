import "font-awesome/css/font-awesome.min.css";

import PropTypes from "prop-types";
import React from "react";

import "./PetSearchBar.css";

export class PetSearchBar extends React.Component {
  render() {
    return (
      <div className="text-container">
        <input
          className="input is-small is-rounded"
          type="text"
          placeholder="Search"
        ></input>
      </div>
    );
  }
}
