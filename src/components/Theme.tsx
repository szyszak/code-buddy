import React from 'react';
import { ThemeProvider } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// STYLES
const theme = {
  red: '#d50000',
  green: '#009624',
  blue: '#304ffe',
  backgroundColor: '#171717',
  fontColor: '#f5f5f5',
};

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  
    body {
      background-color: ${theme.backgroundColor};
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
