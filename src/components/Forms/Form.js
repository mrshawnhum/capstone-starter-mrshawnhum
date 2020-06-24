import "bulma/css/bulma.css";

import React from "react";

import { Input } from "./Input";

export class Form extends React.Component {
  handleChange = (event) => {
    this.setState({
      [event.target.dataset.st]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  processFormData = (formControls, datasetKey = "st") =>
    // Convert to ARRAY and 'filter' only inputs with 'ids' (not 'button', etc.)
    Array.from(formControls)
      .filter(({ dataset }) => dataset[datasetKey])
      // 'map' and transform each 'input' into an OBJECT
      .map(({ dataset, value }) => ({ [dataset[datasetKey]]: value }))
      .reduce((accumulatedData, currentData) => ({
        ...accumulatedData,
        ...currentData,
      }));

  renderInputs = (inputs) =>
    inputs.map(({ labelText, inputType, name }) => (
      <Input
        className="input"
        label={labelText}
        type={inputType}
        name={name}
        key={labelText}
        onChange={this.handleChange}
      />
    ));
}
