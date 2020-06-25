import PropTypes from "prop-types";
import React from "react";

import { Form } from "./Form";

export class Filters extends Form {
  static propTypes = {
    onChange: PropTypes.func,
  };

  inputs = [
    {
      inputClassName: "radio",
      inputType: "radio",
      labelText: "Dogs",
      name: "petType",
    },
    {
      inputClassName: "radio",
      inputType: "radio",
      labelText: "Cats",
      name: "petType",
    },
    {
      inputClassName: "checkbox",
      inputType: "checkbox",
      labelText: "Favorites Only",
    },
  ];

  handleChange = (event) => {
    this.props.onChange(event.target.dataset.st);
  };

  render() {
    return <form className="box">{this.renderInputs(this.inputs)}</form>;
  }
}
