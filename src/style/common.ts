import { css, createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const fadeInAnimation = css`
  animation: fadeInAnimation 1s ease-out forwards;
  @keyframes fadeInAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
