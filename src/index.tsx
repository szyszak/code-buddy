import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './components/GlobalStyles';
import { StoreProvider } from './store/Store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <GlobalStyles />
    <StoreProvider>
      <App />
    </StoreProvider>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
