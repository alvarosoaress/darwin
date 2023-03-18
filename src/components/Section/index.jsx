import React from "react";

import PropTypes from "prop-types";

import { SecDiv, SecImg, SecText, Separator } from "./styled";
import "animate.css/animate.min.css";

export default function Sec({ imagem, titulo, texto }) {
  return (
    <SecDiv>
      <SecImg src={imagem} alt="" />
      <h1>{titulo}</h1>
      <SecText>
        <Separator />
        <p>{texto}</p>
      </SecText>
    </SecDiv>
  );
}

Sec.propTypes = {
  titulo: PropTypes.string.isRequired,
  imagem: PropTypes.node.isRequired,
  texto: PropTypes.string.isRequired,
};
