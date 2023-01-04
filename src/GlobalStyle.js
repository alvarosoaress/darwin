import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body{
      overflow-x: hidden;
      ::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  }

  .container {
    background-color: rgba(0, 0, 0, 0.9);
  }

  .sec {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }

`;
