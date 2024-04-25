import { css } from "styled-components";

const resetStyle = css`
  * {
    margin: 0;
    padding: 0;
  }

  div {
    white-space: "pre-wrap";
  }

  input[type="password"] {
    letter-spacing: 4px;
  }

  body::-webkit-scrollbar {
    display: none;
  }

  body {
    -ms-overflow-style: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  input {
    box-shadow: none;
    outline: none;
    border: none;
  }

  textarea {
    box-shadow: none;
    outline: none;
    border: none;
    resize: none;
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
    flex-shrink: 0;
  }

  :root {
    cursor: default;
  }

  img,
  picture,
  video,
  svg {
    display: block;
    max-width: 100%;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default resetStyle;
