import styled from '@emotion/styled';
import { InputProps } from './Input';

const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  padding-left: 10px;
  box-sizing: border-box;
  border: ${({ isError }) => {
    switch (isError) {
      case true:
        return '1px solid #FF3D3D;';
      case false:
        return '1px solid #ACACAC;';
    }
  }};

  ::placeholder {
    color: #acacac;
  }

  :focus {
    outline: none;
    border: 1.5px solid #000000;
  }
`;

export { StyledInput} ;
