import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, * {
    font: 400 1rem Roboto;
    background: var(--bg);
  }
  button, input {
    outline: 0;
    border: none;
  }
  :root {
    --bg: #fafafa;
    --main: #333;
    --primary: #da552f;
    --link-color: #15c3d6;
    --link-color-hover: #17d6db;
  }
`
