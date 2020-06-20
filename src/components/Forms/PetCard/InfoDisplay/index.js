import PropTypes from "prop-types";
import React from "react";

export const InfoDisplays = ({ info = "N/A" }) => <p>(info)</p>;
InfoDisplays.propTypes = { info: PropTypes.string.isRequired };
