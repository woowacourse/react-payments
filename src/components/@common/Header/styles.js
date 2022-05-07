import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { BRAND_COLORS, COLORS, LAYOUT } from 'styles/theme';
import responsive from 'styles/utils/responsive';

const Container = styled.header`
  position: sticky;
  width: 100%;
  background-color: ${COLORS['white-80']};
  backdrop-filter: blur(1rem);
  border-bottom: 1px solid ${COLORS.alto};
  border-radius: ${LAYOUT.BORDER_RADIUS * 2}px ${LAYOUT.BORDER_RADIUS * 2}px 0 0;
  top: 0px;

  display: flex;
  align-items: center;
  z-index: 100;
  padding: 1.5rem;

  ${responsive.notMobile(
    css`
      position: relative;
    `,
  )}

  & > .previous-button {
    content: '<';
    cursor: pointer;

    font-size: 0.875rem;
    padding: 0.5rem;
    margin-right: 1rem;
    transform: scaleX(1.7);
    color: ${COLORS.silverChalice};

    &:hover {
      color: ${BRAND_COLORS.primary};
    }
  }

  & > .title {
    font-weight: bold;
    font-size: 1.35rem;
    line-height: 1.375rem;
    color: ${COLORS.dorado};
  }
`;

export default Container;
