import React from "react";

import PropTypes from "prop-types";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Shape } from "./styled";

export default function SecShape({ gradient, borderRadius, position }) {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInLeft"
      animateOut="animate__fadeOut"
      offset={100}
    >
      <Shape
        gradient={gradient}
        borderRadius={borderRadius}
        position={position}
      />
    </AnimationOnScroll>
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
