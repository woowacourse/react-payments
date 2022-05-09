import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const inputStyle = css`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  border-radius: 7px;
  max-width: 84px;
  outline: none !important;
  border: inherit;
  font-size: 21px;
  text-align: center;
  margin-right: 11px;
  &:focus {
    box-shadow: none;
  }
`;

export const CVCInput = styled.input`
  ${inputStyle}
`;
