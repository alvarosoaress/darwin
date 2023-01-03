import React, { useEffect } from "react";

import Tilt from "react-parallax-tilt";

import "./Header.css";
import empresa from "../../imgs/empresa.png";

function Header() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "./vanilla-tilt.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="sec-header">
      <Tilt gyroscope tiltMaxAngleX={20} tiltMaxAngleY={20}>
        <div className="header-container" data-tilt>
          <img src={empresa} alt="" className="logo" />
          <h1>DARWIN</h1>
        </div>
      </Tilt>
    </section>
  );
}

export default Header;
