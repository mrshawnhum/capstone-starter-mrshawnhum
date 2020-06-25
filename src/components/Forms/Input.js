import PropTypes from "prop-types";
import React from "react";

import camelCase from "camelcase";

export class Input extends React.Component {
  static defaultProps = {
    type: "text",
    value: "value",
  };

  static propTypes = {
    inputClassName: PropTypes.string,
    label: PropTypes.string.isRequired,
    labelSrOnly: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    st: PropTypes.string,
    type: PropTypes.string,
  };

  camelCaseLabel = camelCase(this.props.label);
  labelClass = this.props.labelSrOnly ? "is-sr-only" : "mr-2";

  render() {
    return (
      <div className="field">
        <label htmlFor={this.camelCaseLabel} className={this.labelClass}>
          {this.props.label}
        </label>
        <input
          className={this.props.inputClassName}
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
