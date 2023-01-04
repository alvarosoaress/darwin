import styled from "styled-components";

export const Title = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 3rem;
`;

export const Popup = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  bottom: 5%;
  height: 100%;
  width: 100%;
`;

export const PopupImg = styled.img`
  position: relative;
  z-index: 5;
`;

export const PopupBackground = styled.div`
  z-index: 1;
  border-radius: 50%;
  width: 50%;
  height: 150%;
  position: absolute;
  background-color: black;
`;

export const Button = styled.button`
  background: rgba(255, 115, 0, 0.993);
  border-radius: 1rem;
  padding: 0.5rem;
  font-size: 1.3rem;
  margin: 1rem;
  cursor: pointer;
  color: white;
  border: none;
`;

export const ButtonLeft = styled(Button)`
  position: absolute;
  right: 75%;
  margin: auto;
  z-index: 10;
`;

export const ButtonRight = styled(Button)`
  position: absolute;
  left: 75%;
  margin: auto;
  z-index: 10;
`;

export const ButtonClose = styled(Button)`
  z-index: 10;
  position: absolute;
  left: 15%;
  bottom: 100%;
  margin: auto;
  background: rgba(190, 39, 39, 0.993);
`;

export const SecClothesDiv = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const SecClothesText = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;

  button {
    display: none;
    opacity: 0;
  }
`;

export const SecClothesImg = styled.img`
  border-radius: 50%;
  width: 250px;
  aspect-ratio: 1/1;
  scale: 0.7;
  cursor: pointer;
  transition: all 800ms ease-in;

  :hover {
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.54);
    transition: all 400ms ease-out;
  }
`;
