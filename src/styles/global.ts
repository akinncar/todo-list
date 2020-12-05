import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(to bottom right, #c376ff, #3f8cff);
    justify-content: center;
    align-items: center;  
    -webkit-font-smoothing: antialiased
  }

  body, input, button, textarea {
    font-family: "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
