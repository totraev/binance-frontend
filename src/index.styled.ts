import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  input, button {
    border: 0;
    outline: 0;
    margin: 0;
    padding: 0;
    background: transparent;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar-thumb {
    height: 90px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 3px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 0px;
    background: rgba(0, 0, 0, 0.02);
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 6px;
  }
`;
