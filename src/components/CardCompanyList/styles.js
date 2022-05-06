import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';

import { BRAND_COLORS, COLORS, GRADATION } from 'styles/theme';

const BACKGROUND_COLORS = [
  { name: 'purple', background: GRADATION['cornflowerBlue-affair-135deg'] },
  { name: 'yellow', background: GRADATION['creamCan-vividTangerine-120deg'] },
  { name: 'sky', background: GRADATION['pictonBlue-danube-left'] },
  { name: 'white', background: GRADATION['mystic-bottom'] },
  { name: 'green', background: GRADATION['gossamer-keppel-top'] },
  { name: 'orange', background: GRADATION['persimmon-carrotOrange-60deg'] },
  { name: 'blue', background: GRADATION['dodgerBlue-aquamarineBlue-top'] },
];

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 0.5rem;

  & > .card-company-item {
    cursor: pointer;
    padding: 0.513rem;
    transition: background-color 0.2s ease;
    border-radius: 0.5rem;
    background: unset;
    border: none;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.525rem;
      width: 3.6rem;
      height: 3.6rem;
      border-radius: 50%;
      background-color: #000;
      margin: 0 auto 0.725rem;
      border: 2px solid #fff;
      text-shadow: 0 0 10px ${COLORS['black-25']};

      ${BACKGROUND_COLORS.map(
        ({ name, background }) => css`
          &[data-color='${name}'] {
            background: ${background};
          }
        `,
      )}
    }

    .name {
      width: 100%;
      text-align: center;
      font-size: 0.913rem;
      color: ${COLORS.dorado};
      transition: color 0.3s ease;
    }

    &:hover {
      background-color: ${BRAND_COLORS.accent};

      .name {
        color: ${BRAND_COLORS.accentFont};
      }
    }
  }

  & > .company-modal-close {
    grid-column: 1/5;
  }
`;

export default Container;
