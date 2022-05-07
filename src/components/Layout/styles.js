import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { COLORS, LAYOUT } from 'styles/theme';
import responsive from 'styles/utils/responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: ${COLORS.white};
  border-radius: ${LAYOUT.BORDER_RADIUS * 2}px;

  .layout-content {
    padding: 1.5rem;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div {
      padding: 1rem;
      height: 100%;

      &.fill {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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
    width: 720px;
    height: unset;
    box-shadow: 0px 0.625rem 1.875rem 1.25rem ${COLORS['black-05']};

    .layout-content {
      display: grid;
      grid-template-columns: minmax(auto, 45%) minmax(auto, 55%);
      gap: 3rem;
    }
  `)}
`;

export default Container;
