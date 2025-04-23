import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { TextProps } from './Text.types';

const variants = {
  Title: css`
    font-size: 24px;
    white-space: pre-wrap;
  `,
  Body: css`
    font-size: 18px;
    white-space: pre-wrap;
    line-height: 140%;
  `,
  Caption: css`
    font-size: 14px;
    white-space: pre-wrap;
    line-height: 140%;
  `,
};

const fontWeights = {
  regular: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  semibold: css`
    font-weight: 600;
  `,
  bold: css`
    font-weight: 700;
  `,
};

export const StyledTextContainer = styled.p<TextProps>`
  margin: 0;
  color: ${({ color }) => color};
  ${({ fontWeight }) => fontWeights[fontWeight ?? 'regular']};
  ${({ variant }) => variants[variant]}
`;
