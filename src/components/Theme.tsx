import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import bg from '../assets/bg.png';

// THEME
const theme = {
  red: '#c00101',
  green: '#006411',
  blue: '#304fba',
  backgroundColor: '#171717',
  backgroundImg: bg,
  fontColor: '#f5f5f5',
};

// GLOBAL STYLE
const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    body {
      background-image: url(${theme.backgroundImg});
      color: ${theme.fontColor};
      font-family: 'Cairo', sans-serif;
    }
  `;

// COMPONENT
const Theme: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Theme;
