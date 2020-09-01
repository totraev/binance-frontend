import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { App } from './components/App';

import * as serviceWorker from './serviceWorker';
import { GlobalStyles } from './index.styled';
import { createStore } from './store/createStore';

const store = createStore();

const theme: DefaultTheme = {
  breakpoints: {
    mobile: 0,
    tablet: 737,
    desktop: 1195,
  },
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
