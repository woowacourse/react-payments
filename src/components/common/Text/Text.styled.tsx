import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { Props } from '.';

const variants = {
  Title: css`
    font-size: 24px;
    font-weight: bold;
  `,
  Body: css`
    font-size: 20px;
    font-weight: medium;
  `,
  Caption: css`
    font-size: 16px;
    font-weight: normal;
  `,
};

export const StyledTextContainer = styled.p<Props>`
  color: ${({ color }) => color};
  ${({ variant }) => variants[variant]}
`;
