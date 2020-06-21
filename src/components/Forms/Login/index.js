import PropTypes from "prop-types";
import React from "react";

import { Button } from "components/Button";
import { Form } from "../Form";

import styles from "./Login.module.css";
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

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        {this.renderInputs(this.inputs)}
        <Button buttonClass="button" />
        <Button buttonClass="plain" label="Register?" type="button" />
      </form>
    );
  }
}
