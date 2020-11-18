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
  :root {
    --bg: #fafafa;
    --main: #333;
    --primary: #da552f;
  }
`
