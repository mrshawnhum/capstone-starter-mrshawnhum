import PropTypes from "prop-types";
import React from "react";
import { Nav } from "./Nav";
import { PetSearchBar } from "./PetSearchBar";

export class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Find My Rescue</h1>
        <PetSearchBar />
        <Nav />
      </div>
    );
  }
}
