import styled from '@emotion/styled';
import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  isError?: boolean;
};

const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  padding-left: 10px;
  box-sizing: border-box;
  border: ${({ isError }) => `1px solid ${isError ? '#FF3D3D' : '#ACACAC'}`};

  ::placeholder {
    color: #acacac;
  }

  :focus {
    outline: none;
    border: 1.5px solid #000000;
  }
`;

const Input = (props: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
