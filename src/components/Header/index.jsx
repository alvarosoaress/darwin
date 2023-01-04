import React from "react";

import Tilt from "react-parallax-tilt";

import empresa from "../../imgs/empresa.png";
import { SecHeader, HeaderContainer } from "./styled";

function Header() {
  return (
    <SecHeader>
      <Tilt gyroscope tiltMaxAngleX={25} tiltMaxAngleY={25}>
        <HeaderContainer>
          <img src={empresa} alt="" />
          <h1>DARWIN</h1>
        </HeaderContainer>
      </Tilt>
    </SecHeader>
  );
}

export default Header;
