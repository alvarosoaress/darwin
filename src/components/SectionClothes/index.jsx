/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

import PropTypes from "prop-types";
import SecForm from "../SectionShape";

import vermelho from "../../imgs/vermelhoPerfil.png";
import azul from "../../imgs/azulPerfil.png";
import verde from "../../imgs/verdePerfil.png";
import {
  Button,
  ButtonClose,
  ButtonLeft,
  ButtonRight,
  Popup,
  PopupBackground,
  PopupImg,
  SecClothesDiv,
  SecClothesImg,
  SecClothesText,
  Title,
} from "./styled";
import { SecDiv } from "../Section/styled";

export default function SecClothes({ titulo }) {
  const displayImgs = [vermelho, azul, verde];
  const colorOptions = ["vermelho", "azul", "verde", "padrao"];
  const colorGradient = {
    vermelho: ["#D31027", "#EA384D"],
    azul: ["#ba0aff", "#2d27ff"],
    verde: ["#236612", "#53bd0c"],
    padrao: ["#ba0aff", "#2d27ff"],
  };
  const textColor = {
    vermelho:
      "O vermelho é uma cor forte, poderosa e com muita energia por trás dela. Pode ser ousado ou intenso, mas também é quente e convidativo. É uma cor ousada e apaixonada que pode fazer uma pessoa se sentir confiante e ousada em qualquer situação. O vermelho também pode ser usado para expressar raiva ou frustração quando você está se sentindo fortemente em relação a algo.",
    azul: "O azul é a cor da tranquilidade, trazendo um efeito calmante sobre o corpo, sendo bastante usado quando a pessoa está se sentindo em baixo ou ansioso, usar o azul pode ajudá-lo a se acalmar, pensar racionalmente e se sentir melhor.",
    verde:
      "O verde é a cor da natureza, do crescimento e da renovação. É uma cor que tem sido associada à paz, harmonia e equilíbrio por milhares de anos. As pessoas costumam usar o verde porque querem sentir-se calmas e aterrorizadas em seu entorno.",
  };

  const [clothState, setClothState] = useState(false);
  const [clothColor, setClothColor] = useState("padrao");
  const [clothDisplay, setClothDisplay] = useState(false);
  const [clothNum, setClothNum] = useState(1);

  const firstGradient = colorGradient[clothColor][0];
  const secondGradient = colorGradient[clothColor][1];

  const SCREEN_SIZE = window.screen.width;

  return (
    <>
      <SecForm
        gradient={{ first: firstGradient, second: secondGradient }}
        position={{ R: "0", Y: SCREEN_SIZE <= 800 ? "-20vh" : "" }}
        borderRadius="0% 100% 48% 52%/49% 57% 43% 51%"
      />
      <SecForm
        gradient={{ first: firstGradient, second: secondGradient }}
        position={{ X: "-40px", Y: SCREEN_SIZE <= 800 ? "85vh" : "" }}
        borderRadius="0% 100% 48% 52%/49% 57% 43% 51%"
      />

      <Popup style={{ display: clothDisplay ? "flex" : "none" }}>
        <ButtonLeft
          type="button"
          onClick={() => {
            setClothNum(clothNum <= 1 ? 4 : clothNum - 1);
          }}
        >
          {"<"}
        </ButtonLeft>
        <PopupBackground />
        <PopupImg
          src={`${process.env.PUBLIC_URL}/roupas/${clothColor}/${clothNum}.png`}
          alt=""
        />
        <ButtonRight
          type="button"
          onClick={() => {
            setClothNum(clothNum >= 4 ? 1 : clothNum + 1);
          }}
        >
          {">"}
        </ButtonRight>
        <ButtonClose
          type="button"
          onClick={() => {
            setClothDisplay(!clothDisplay);
          }}
        >
          X
        </ButtonClose>
      </Popup>

      <Title>{titulo}</Title>
      <SecDiv
        className="sec-div"
        style={{ flexDirection: clothState ? "row" : "column" }}
      >
        <SecClothesDiv style={{ flexDirection: clothState ? "column" : "row" }}>
          {displayImgs.map((img, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <SecClothesImg
              style={{ width: clothState ? "150px" : "250px" }}
              src={img}
              alt=""
              onClick={() => {
                if (clothColor === colorOptions[index]) {
                  setClothState(false);
                  setClothColor("padrao");
                } else {
                  setClothState(true);
                  setClothColor(colorOptions[index]);
                }
              }}
            />
          ))}
        </SecClothesDiv>
        <SecClothesText style={{ display: clothState ? "flex" : "none" }}>
          <p>{textColor[clothColor]}</p>
          <Button
            type="button"
            onClick={() => {
              setClothDisplay(!clothDisplay);
            }}
          >
            Ver Roupa
          </Button>
        </SecClothesText>
      </SecDiv>
    </>
  );
}
SecClothes.defaultProps = {
  titulo: null,
};

SecClothes.propTypes = {
  titulo: PropTypes.string,
};
