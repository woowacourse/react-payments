import styled from '@emotion/styled';

import { Props } from '.';

export const StyledInputContainer = styled.input<Pick<Props, 'isValid'>>`
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
  ${({ isValid }) => 'border-color : ' + (isValid ? '#ACACAC' : '#FF3D3D')};

  &:focus {
    border-color: black;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
