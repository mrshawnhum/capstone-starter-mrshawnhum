import PropTypes from "prop-types";
import React from "react";

import { Form } from "./Form";

export class Filters extends Form {
  static propTypes = {
    onChange: PropTypes.func,
  };

  inputs = [
    {
      inputType: "radio",
      labelText: "Dogs",
      name: "petType",
    },
    {
      inputType: "radio",
      labelText: "Cats",
      name: "petType",
    },
    {
      inputType: "checkbox",
      labelText: "Favorites Only",
    },
  ];

  handleChange = (event) => {
    this.props.onChange(event.target.dataset.st);
  };

  render() {
    return <form>{this.renderInputs(this.inputs)}</form>;
  }
}
