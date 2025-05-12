import styled from '@emotion/styled';

import { InputProps } from './Input.types';

import { colors } from '@/styles/global';

export const StyledInputContainer = styled.input<Pick<InputProps, 'isValid'>>`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  height: 40px;
  color: black;
  background-color: white;
  font-size: 14px;
  border: solid 1px;
  border-radius: 4px;
  outline: none;
  border-color: ${({ isValid }) => (isValid ? colors.GY1 : colors.red)};

  &:focus {
    border-color: ${({ isValid }) => (isValid ? colors.black : colors.red)};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${colors.GY2};
    background-color: rgba(172, 172, 172, 0.2);
  }
`;
