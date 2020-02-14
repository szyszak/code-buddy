import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  red: 'red',
  green: 'green',
  blue: 'blue',
  backgroundColor: '#171717',
  fontColor: '#ffffff',
};

const Theme: React.FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
