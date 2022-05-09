import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { COLORS, LAYOUT } from 'styles/theme';
import responsive from 'styles/utils/responsive';
import animate from 'styles/utils/animate';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  background-color: ${COLORS.white};
  border-radius: ${LAYOUT.BORDER_RADIUS * 2}px;

  ${responsive.notMobile(css`
    margin: 10vh auto 10vh;
  `)}

  .layout-content {
    padding: 0.5rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
      padding: 1.5rem;
      height: 100%;
      ${animate(
        '0.3s ease',
        css`
          from {
            opacity: 0;
            transform: translateY(10%);
          }

          to {
            opacity: 1;
            transform: translateY(0%);
          }
        `,
      )}
      animation-fill-mode: forwards;

      &.fill {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      &.top {
        display: flex;
        flex-direction: column;
        justify-content: start;
      }

      &.center {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      &.bottom {
        display: flex;
        flex-direction: column;
        justify-content: end;
      }
    }

    & > .layout-side-container {
      display: flex;
      flex-direction: column;
      justify-content: center;

      ${responsive.notMobile(
        css`
          justify-content: start;
        `,
      )}
    }
  }

  ${responsive.notMobile(css`
    width: 740px;
    height: unset;
    min-height: 25rem;
    box-shadow: 0px 0.625rem 1.875rem 1.25rem ${COLORS['black-05']};

    .layout-content {
      display: grid;
      grid-template-columns: minmax(auto, 45%) minmax(auto, 55%);
      gap: 3rem;
    }
  `)}
`;

export default Container;
