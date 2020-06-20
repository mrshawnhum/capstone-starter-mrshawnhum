import PropTypes from "prop-types";
import React from "react";

import { Button } from "components/Button";
import { Form } from "../Form";
export class Login extends Form {
  state = {
    isLogged: false,
    password: "",
    username: "",
  };

  inputs = [
    {
      inputType: "text",
      labelText: "Username",
    },
    {
      inputType: "password",
      labelText: "Password",
    },
  ];

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.processFormData(e.target, "st"));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Button />
        <Button buttonClass="plain" label="Register?" type="button" />
      </form>
    );
  }
}
