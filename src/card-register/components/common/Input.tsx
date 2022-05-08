import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const inputStyle = css`
  background-color: inherit;
  height: 47px;
  width: 100%;
  max-width: 318px;
  outline: none !important;
  border: inherit;
  font-size: 21px;
  text-align: center;
  &:focus {
    box-shadow: none;
  }
`;

export const Input = styled.input`
  ${inputStyle}
`;
