import PropTypes from "prop-types";
import React from "react";
import { Nav } from "./Nav";
import { PetSearchBar } from "./PetSearchBar";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <PetSearchBar />
        <Nav />
      </div>
    );
  }
}
