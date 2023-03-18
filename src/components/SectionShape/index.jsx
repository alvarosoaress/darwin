import React from "react";

import PropTypes from "prop-types";

import { Shape } from "./styled";

export default function SecShape({ gradient, borderRadius, position }) {
  return (
    <Shape
      gradient={gradient}
      borderRadius={borderRadius}
      position={position}
    />
  );
}

SecShape.defaultProps = {
  borderRadius: null,
};

SecShape.propTypes = {
  borderRadius: PropTypes.string,
  gradient: PropTypes.shape({
    firstGradient: PropTypes.string,
    secondGradient: PropTypes.string,
  }).isRequired,
  position: PropTypes.shape({
    X: PropTypes.string,
    Y: PropTypes.string,
  }).isRequired,
};
