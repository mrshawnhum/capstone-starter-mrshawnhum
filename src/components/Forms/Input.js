import PropTypes from "prop-types";
import React from "react";

import camelCase from "camelcase";

export class Input extends React.Component {
  static defaultProps = {
    type: "text",
    value: "value",
  };

  static propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func,
    st: PropTypes.string,
    type: PropTypes.string,
  };

  camelCaseLabel = camelCase(this.props.label);

  render() {
    return (
      <div>
        <label htmlFor={this.camelCaseLabel}>{this.props.label}</label>
        <input
          id={this.camelCaseLabel}
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.label}
          data-st={this.props.st || this.camelCaseLabel}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}