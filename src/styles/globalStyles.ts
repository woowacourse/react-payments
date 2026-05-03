import type { Theme } from './theme';
import { css } from '@emotion/react';

export const globalStyles = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${theme.typography.info.fontFamily}, sans-serif;
    background-color: rgb(245, 245, 245);
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font: inherit;
    color: inherit;
  }

  input {
    font: inherit;
  }
`;
