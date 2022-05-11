import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { BRAND_COLORS, COLORS } from 'styles/theme';
import responsive from 'styles/utils/responsive';

const ResultMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 1.5rem 0;

  ${responsive.notMobile(css`
    align-items: baseline;
    justify-content: flex-start;
  `)}

  & > .emoji {
    font-size: 4.6rem;
    margin-bottom: 1.2rem;

    ${responsive.notMobile(css`
      font-size: 3.8rem;
    `)}
  }

  & > .title {
    font-size: 2rem;
    color: ${BRAND_COLORS.primary};
    margin-bottom: 1rem;
  }

  & > .description {
    font-size: 1.2rem;
    letter-spacing: 0.063rem;
    color: ${COLORS.silverChalice};
  }
`;

export default ResultMessage;
