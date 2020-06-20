import PropTypes from "prop-types";
import React from "react";

export const Picture = ({ name, pic, type }) => {
  return (
    <figure>
      <img src={pic.large} alt="" />
      <figcaption>
        {name} {type}
      </figcaption>
    </figure>
  );
};
Picture.propTypes = {
  name: PropTypes.object.isRequired,
  pic: PropTypes.object.isRequired,
  type: PropTypes.object.isRequired,
};
