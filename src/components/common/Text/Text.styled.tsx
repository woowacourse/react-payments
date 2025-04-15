import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Props } from '.';

const variants = {
  Title: css`
    font-size: 24px;
    font-weight: 700;
    white-space: pre-wrap;
    line-height: 140%;
  `,
  Body: css`
    font-size: 20px;
    font-weight: 500;
    white-space: pre-wrap;
    line-height: 140%;
  `,
  Caption: css`
    font-size: 16px;
    font-weight: 400;
    white-space: pre-wrap;
    line-height: 140%;
  `,
};

export const StyledTextContainer = styled.p<Props>`
  margin: 0;
  color: ${({ color }) => color};
  ${({ variant }) => variants[variant]}
`;
