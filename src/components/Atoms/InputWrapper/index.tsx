import styled from 'styled-components';
import { ReactNode } from 'react';

interface InputWrapperProps {
  children: ReactNode;
}

function InputWrapper({ children }: InputWrapperProps) {
  return <Wrapper>{children}</Wrapper>;
}

export default InputWrapper;

const Wrapper = styled.div`
  display: inline-block;
  padding: 10px 0;
  border-radius: 7px;
  background-color: #ecebf1;
`;
