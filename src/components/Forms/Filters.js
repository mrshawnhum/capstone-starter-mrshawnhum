import PropTypes from "prop-types";
import React from "react";

import { Form } from "./Form";

export class Filters extends Form {
  static propTypes = {
    onChange: PropTypes.func,
  };

  inputs = [
    {
      labelText: "Dogs",
      inputType: "radio",
    },
    {
      labelText: "Cats",
      inputType: "radio",
    },
    {
      labelText: "Search",
      inputType: "search",
    },
    {
      labelText: "Favorites Only",
      inputType: "checkbox",
    },
  ];

  handleChange = (event) => {
    this.props.onChange({
      [event.target.dataset.st]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  render() {
    return <form>{this.renderInputs(this.inputs)}</form>;
  }
}
