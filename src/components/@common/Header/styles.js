import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { COLORS, LAYOUT } from 'styles/theme';
import responsive from 'styles/utils/responsive';

const Container = styled.header`
  position: sticky;
  width: 100%;
  background-color: ${COLORS['white-80']};
  border-bottom: 1px solid ${COLORS.alto};
  border-radius: ${LAYOUT.BORDER_RADIUS * 2}px ${LAYOUT.BORDER_RADIUS * 2}px 0 0;
  top: 0px;

  display: flex;
  align-items: center;

  font-weight: bold;
  font-size: 1.35rem;
  line-height: 1.375rem;
  color: ${COLORS.dorado};
  padding: 1.5rem;
  z-index: 100;

  ${responsive.notMobile(
    css`
      position: relative;
    `,
  )}

  &::before {
    content: '<';
    font-size: 0.875rem;
    margin-right: 0.938rem;
    transform: scaleX(1.7);
    color: ${COLORS.silverChalice};
  }
`;

export default Container;
