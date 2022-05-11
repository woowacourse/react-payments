import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { BRAND_COLORS, COLORS, LAYOUT } from 'styles/theme';
import responsive from 'styles/utils/responsive';

import Logo from 'assets/logo.png';

const Container = styled.header`
  position: sticky;
  display: flex;
  align-items: center;

  width: 100%;
  height: 4.25rem;

  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: 7.5rem;
  background-position: right 1.7rem center;

  background-color: ${COLORS['white-50']};
  backdrop-filter: blur(1rem);

  border-bottom: 1px solid ${COLORS.alto};
  border-radius: ${LAYOUT.BORDER_RADIUS * 2}px ${LAYOUT.BORDER_RADIUS * 2}px 0 0;

  top: 0px;
  z-index: 100;
  padding: 1.5rem;

  box-shadow: 0 0 2.25rem ${COLORS['black-15']};

  ${responsive.notMobile(
    css`
      position: relative;
      box-shadow: unset;
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
    font-size: 1.35rem;
    font-weight: bold;
    line-height: 1.375rem;
    color: ${COLORS.dorado};
  }
`;

export default Container;
