import React from "react";

import PropTypes from "prop-types";

import "./sec.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

export default function Sec({ imagem, titulo, texto }) {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInLeft"
      animateOut="animate__fadeOut"
    >
      <div className="sec-div">
        <img src={imagem} alt="" className="sec-img" />
        <h1>{titulo}</h1>
        <div className="sec-text">
          <div className="separator" />
          <p>{texto}</p>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

Sec.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagem: PropTypes.node.isRequired,
  texto: PropTypes.string.isRequired,
};
