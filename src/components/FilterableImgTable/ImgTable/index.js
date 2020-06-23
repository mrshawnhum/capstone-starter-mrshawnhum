import PropTypes from "prop-types";
import React from "react";

export class ImgTable extends React.Component {
  static propTypes = {
    photos: PropTypes.string,
    name: PropTypes.string,
  };

  render() {
    return <img src={this.props.photos} alt={this.name} />;
  }
}
