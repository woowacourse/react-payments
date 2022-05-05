import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { COLORS } from 'styles/theme';
import responsive from 'styles/utils/responsive';

const Container = styled.div`
  width: 100%;
  min-height: 20rem;
  padding: 1.5rem;
  background-color: ${COLORS.white};
  border-radius: 10px;

  ${responsive.notMobile(css`
    max-width: unset;
    width: 700px;
    box-shadow: 0px 0.625rem 1.875rem 1.25rem ${COLORS['black-05']};
  `)}
`;

export default Container;
