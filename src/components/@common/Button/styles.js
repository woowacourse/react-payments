import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { BRAND_COLORS, COLORS, LAYOUT } from 'styles/theme';

const BUTTON_TYPE = {
  default: css`
    background-color: ${COLORS.athensGray};
    color: ${COLORS.dorado};
  `,
  primary: css`
    background-color: ${BRAND_COLORS.primary};
  `,
  warning: css`
    background-color: ${BRAND_COLORS.warning};
  `,
  danger: css`
    background-color: ${BRAND_COLORS.danger};
  `,
  success: css`
    background-color: ${BRAND_COLORS.success};
  `,
  info: css`
    background-color: ${BRAND_COLORS.info};
  `,
};

const BUTTON_SIZE = {
  small: css`
    font-size: 1rem;
    padding: 0.5rem 1rem;
  `,
  medium: css`
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  `,
  large: css`
    font-size: 1.2rem;
    padding: 1rem 2rem;
  `,
};

const Container = styled.button`
  cursor: pointer;
  border: none;
  border-radius: ${LAYOUT.BORDER_RADIUS}px;

  transition: filter 0.3s ease, background-color 0.3s ease;
  color: ${COLORS.white};

  ${({ buttonType }) => BUTTON_TYPE[buttonType]}
  ${({ size }) => BUTTON_SIZE[size]}
  ${({ width }) =>
    css`
      width: ${width};
    `}

  &:hover {
    filter: brightness(0.9);
  }

  &:disabled {
    cursor: default;
    background-color: ${COLORS.alto};
    color: ${COLORS.silverChalice};
    filter: brightness(1);
  }
`;

export default Container;
