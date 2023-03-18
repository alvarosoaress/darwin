import styled, { keyframes } from "styled-components";

const color = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`;

export const Shape = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "50%"};
  top: ${(props) => props.position.Y};
  left: ${(props) => props.position.X};
  right: ${(props) => props.position.R};
  background: linear-gradient(
    270deg,
    ${(props) => props.gradient.first},
    ${(props) => props.gradient.second}
  );
  background-size: 400% 400%;

  animation: ${color} 10s linear infinite;

  @media screen and (max-width: 800px) {
    border-radius: 50%;
    //top: -160px;
  }

  @media screen and (max-width: 425px) {
    width: 325px;
    height: 325px;
  }
`;
