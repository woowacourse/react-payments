import styled from '@emotion/styled';
import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'> & {
  errorState?: boolean;
};

const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  padding-left: 10px;
  box-sizing: border-box;
  border: ${({ errorState }) => `1px solid ${errorState ? '#FF3D3D' : '#ACACAC'}`};

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
