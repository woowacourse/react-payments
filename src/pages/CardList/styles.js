import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { BRAND_COLORS, COLORS, LAYOUT } from 'styles/theme';
import responsive from 'styles/utils/responsive';

const CardWallet = styled.div`
  padding: 3.5rem 0;

  & > div {
    position: relative;
    height: 3rem;
    margin: 0.3rem;
    ${responsive.pc(css`
      justify-content: left;
    `)}

    & > .card {
      transition: transform 0.3s ease;
      user-select: none;

      &:hover,
      &:active,
      &:focus {
        transform: scale(1.05) translateY(-0.5rem) translateX(2rem);
        opacity: 1;
      }
    }
  }
`;

const ButtonAddCard = styled.div`
  cursor: pointer;

  padding: 1rem;
  border-radius: ${LAYOUT.BORDER_RADIUS * 2}px;
  border: 2px dashed ${COLORS.silver};
  background-color: ${COLORS.concrete};
  text-align: center;
  color: ${BRAND_COLORS.primary};
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: ${COLORS.athensGray};
    border-color: ${BRAND_COLORS.accent};
  }

  > .icon {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }

  > .text {
    font-size: 0.9rem;
    letter-spacing: -0.2px;
  }
`;

export { CardWallet, ButtonAddCard };
