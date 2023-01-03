/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

import "./secClothes.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

import PropTypes from "prop-types";
import SecForm from "../SectionForm/secForm";

import vermelho from "../../imgs/vermelhoPerfil.png";
import azul from "../../imgs/azulPerfil.png";
import verde from "../../imgs/verdePerfil.png";

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

  return (
    <AnimationOnScroll
      animateIn="animate__fadeInLeft"
      animateOut="animate__fadeOut"
    >
      <div
        className="popup"
        style={{ display: clothDisplay ? "flex" : "none" }}
      >
        <button
          type="button"
          className="popup-button-left"
          onClick={() => {
            setClothNum(clothNum <= 1 ? 4 : clothNum - 1);
          }}
        >
          {" "}
          {"<"}{" "}
        </button>
        <div className="popup-backgroud" />
        <img
          src={`${process.env.PUBLIC_URL}/roupas/${clothColor}/${clothNum}.png`}
          className="popup-image"
          alt=""
        />
        <button
          type="button"
          className="popup-button-right"
          onClick={() => {
            setClothNum(clothNum >= 4 ? 1 : clothNum + 1);
          }}
        >
          {" "}
          {">"}{" "}
        </button>
        <button
          type="button"
          className="popup-button-close"
          onClick={() => {
            setClothDisplay(!clothDisplay);
          }}
        >
          X
        </button>
      </div>
      <SecForm
        gradient={{ first: firstGradient, second: secondGradient }}
        position={{ X: "-20em", Y: "-1em" }}
      />
      <SecForm
        gradient={{ first: firstGradient, second: secondGradient }}
        position={{ X: "50em", Y: "-10em" }}
      />

      <h1>{titulo}</h1>
      <div
        className="sec-div"
        style={{ flexDirection: clothState ? "row" : "column" }}
      >
        <div className={clothState ? "sec-clothes-clicked" : "sec-clothes"}>
          {displayImgs.map((img, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              src={img}
              alt=""
              className="sec-clothes-img"
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
        </div>
        <div
          style={{ display: clothState ? "flex" : "none" }}
          className="sec-clothes-text"
        >
          <p>{textColor[clothColor]}</p>
          <button
            type="button"
            onClick={() => {
              setClothDisplay(!clothDisplay);
            }}
          >
            Ver Roupa
          </button>
        </div>
      </div>
    </AnimationOnScroll>
  );
}

SecClothes.propTypes = {
  titulo: PropTypes.string.isRequired,
};
