import React from "react";

import PropTypes from "prop-types";

import { AnimationOnScroll } from "react-animation-on-scroll";
import { SecDiv, SecImg, SecText, Separator } from "./styled";
import "animate.css/animate.min.css";

export default function Sec({ imagem, titulo, texto }) {
  return (
    <AnimationOnScroll
      animateIn="animate__fadeInLeft"
      animateOut="animate__fadeOut"
    >
      <SecDiv>
        <SecImg src={imagem} alt="" />
        <h1>{titulo}</h1>
        <SecText>
          <Separator />
          <p>{texto}</p>
        </SecText>
      </SecDiv>
    </AnimationOnScroll>
  );
}

Sec.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagem: PropTypes.node.isRequired,
  texto: PropTypes.string.isRequired,
};
