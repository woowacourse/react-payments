import { css } from '@emotion/react';

const BREAK_POINT = {
  TABLET: 760,
  PC: 960,
};

const mediaQuery = (size, styles) => css`
  @media ${size} {
    ${css(styles)};
  }
`;

const responsive = {
  mobile: (styles) => mediaQuery(`(max-width: ${BREAK_POINT.TABLET - 1}px)`, styles),
  tablet: (styles) =>
    mediaQuery(`(min-width: ${BREAK_POINT.TABLET}px) and (max-width: ${BREAK_POINT.PC}px)`, styles),
  pc: (styles) => mediaQuery(`(min-width: ${BREAK_POINT.PC + 1}px)`, styles),
  notMobile: (styles) => mediaQuery(`(min-width: ${BREAK_POINT.TABLET}px)`, styles),
};

export default responsive;
