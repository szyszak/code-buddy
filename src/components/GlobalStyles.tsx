import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    /* height: 100%; */
  }

  #root { 
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }

  body {
    background-color: #171717;
    color: #ffffff;
    font-family: 'Cairo', sans-serif;
  }
`;

export default GlobalStyles;
