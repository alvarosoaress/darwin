import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }

  body {
    font-family: "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }


  body{
    overflow-x: hidden;
      ::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  }

  button{
    cursor: pointer;
  }

  .container {
    background-color: rgba(0, 0, 0, 0.9);
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
  }

  .sec {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 125vh;
    overflow-x: hidden;
    scroll-snap-align: center;
  }

`;
