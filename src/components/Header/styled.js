import styled from "styled-components";

export const SecHeader = styled.header`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  scroll-snap-align: center;

  h1 {
    font-size: 5em;
    font-weight: bold;
    color: white;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 95vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

export const HeaderLogo = styled.img`
  transform-style: preserve-3d;
  transform: perspective(1000px);
`;
