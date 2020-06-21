import "bulma/css/bulma.css";

import React from "react";

import { Input } from "./Input";
import { authenticateUser } from "api";

export class Form extends React.Component {
  handleChange = (event) => {
    this.setState({
      [event.target.dataset.st]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser(this.processFormData(e.target, "st"));
  };

  processFormData = (formControls, datasetKey) =>
    Array.from(formControls)
      .filter(({ dataset }) => dataset[datasetKey])
      .map(({ dataset, value }) => ({ [dataset[datasetKey]]: value }))
      .reduce((accumulatedData, currentData) => ({
        ...accumulatedData,
        ...currentData,
      }));

  renderInputs = (inputs) =>
    inputs.map(({ labelText, inputType }) => (
      <Input
        className="input"
        label={labelText}
        type={inputType}
        key={labelText}
        onChange={this.handleChange}
      />
    ));
}
