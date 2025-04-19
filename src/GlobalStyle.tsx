import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* design token */
  :root {
    --color-yellow: #ddcd78;
    --color-black: #333333;
    --color-gray: #8b95a1;
    --color-white: #ffffff;
    --color-red: #ff3d3d;

    --font-size-header: 18px;
    --font-size-body: 11px;
    --font-size-caption: 9.5px;
    --font-size-subheader: 14px;

    --font-weight-header: bold;
    --font-weight-body: normal;
    --font-weight-caption: normal;
  }

  /* reset css */
  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, address, cite, code, del, dfn, em,
  img, ins, kbd, q, s, samp, small, strong, sub,
  sup, var, b, i, dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend, table, caption,
  tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote::before, blockquote::after,
  q::before, q::after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* settings */
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
