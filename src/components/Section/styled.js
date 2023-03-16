import styled from "styled-components";
import { SecClothesDiv } from "../SectionClothes/styled";

export const Separator = styled.div`
  left: 30%;
  height: 5px;
  width: 50px;
  background-color: white;
  transition: all 700ms ease-in-out;
`;

export const SecImg = styled.img`
  position: absolute;
  width: 200px;
  left: 0;
  top: -5em;
  scale: 0.7;
  transition: all 800ms ease-in;

  @media screen and (max-width: 800px) {
    top: -10em;
    left: -5em;
  }

  @media screen and (max-width: 601px) {
    width: 70%;
    top: -5em;
    left: -7em;
  }
`;

export const SecDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  margin: 2em;
  width: 55vw;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  border: 1px solid rgba(255, 255, 255, 0.54);
  scroll-snap-align: center;

  h1 {
    color: white;
    font-weight: bold;
    font-size: 3rem;
  }

  p {
    display: none;
    margin-top: 1rem;
    opacity: 0;
    text-align: center;
    font-size: 1.2rem;
    color: white;
    transition: all 400ms ease-in-out;
  }

  :hover {
    //height: 55%;
    box-shadow: 7px 3px 16px 10px rgba(92, 92, 92, 0.75);
    -webkit-box-shadow: 7px 3px 16px 10px rgba(92, 92, 92, 0.75);
    -moz-box-shadow: 7px 3px 16px 10px rgba(92, 92, 92, 0.75);
    p {
      opacity: 1;
      display: block;
    }

    ${SecClothesDiv} {
      display: flex;
    }

    ${Separator} {
      height: 2px;
      width: 60%;
    }

    ${SecImg} {
      top: -7em;
    }

    button {
      background: rgba(255, 255, 255, 0.1);
      border-radius: 5px;
      margin: 5px;
      padding: 1rem;
      font-size: 1.3rem;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(3px);
      -webkit-backdrop-filter: blur(3px);
      border: 1px solid rgba(255, 255, 255, 0.54);
      color: white;
      display: block;
      opacity: 1;
    }
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 2.5rem;
    }

    p {
      font-size: 0.9rem;
    }
  }

  @media screen and (max-width: 601px) {
    h1 {
      font-size: 1.7rem;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;

export const SecText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
