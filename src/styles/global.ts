import { createGlobalStyle } from 'styled-components';

// import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"');
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
  background: ${({ theme }) => theme.colors.background};
}

body {
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font: 14px 'Roboto' sans-serif;
}
a {
  text-decoration: none;
}
ul {
  list-style: none;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}

button {
  cursor: pointer;
}
`;
