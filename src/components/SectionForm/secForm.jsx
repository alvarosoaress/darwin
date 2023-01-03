import React from "react";

import PropTypes from "prop-types";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { Form } from "./styles";

export default function SecForm({ gradient, borderRadius, position }) {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInLeft"
      animateOut="animate__fadeOut"
      offset={100}
    >
      <Form
        gradient={gradient}
        borderRadius={borderRadius}
        position={position}
      />
    </AnimationOnScroll>
  );
}

SecForm.propTypes = {
  gradient: PropTypes.string.isRequired,
  borderRadius: PropTypes.string.isRequired,
  position: PropTypes.node.isRequired,
};
