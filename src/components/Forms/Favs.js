import PropTypes from "prop-types";
import React from "react";

import { Button } from "components/Button";

export class Favs extends React.Component {
  static propTypes = {
    savedSearches: PropTypes.bool,
    onClick: PropTypes.func,
  };

  handleFaved = () => {
    this.setState({ savedSearches: !this.state.savedSearches }, () => {
      this.props.onClick(this.state.savedSearches);
    });
  };

  render() {
    const heartSpan = !this.props.savedSearches ? (
      <Button
        className="fa fa-heart-o"
        buttonClass="plain"
        buttonText=""
        onClick={this.handleFaved}
      />
    ) : (
      <Button
        className="fa fa-heart"
        buttonClass="plain"
        buttonText=""
        onClick={this.handleFaved}
      />
    );

    return <div>{heartSpan}</div>;
  }
}
