import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const passwordInputStyle = css`
  background-color: #ecebf1;
  height: 45px;
  width: 43px;
  border-radius: 7px;
  outline: none !important;
  border: inherit;
  font-size: 21px;
  text-align: center;
  margin-right: 7px;
  &:focus {
    box-shadow: 'none';
  }
  &:disabled {
    background-color: white;
  }
`;

export const PasswordInput = styled.input`
  ${passwordInputStyle}
`;
