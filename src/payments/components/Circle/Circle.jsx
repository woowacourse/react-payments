import PropTypes from "prop-types";
import React from "react";

const Circle = ({ width, height, color }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx={width / 2} cy={height / 2} r={width / 2} fill={color} />
  </svg>
);

Circle.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Circle.defaultProps = {
  color: "#04C09E",
};

export default Circle;
