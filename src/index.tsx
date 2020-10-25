import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import 'reflect-metadata';

import { App } from './views/components/App';

import * as serviceWorker from './serviceWorker';
import { GlobalStyles } from './index.styled';

configure({ enforceActions: 'always' });

const theme: DefaultTheme = {
  breakpoints: {
    mobile: 0,
    tablet: 737,
    desktop: 1195,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
