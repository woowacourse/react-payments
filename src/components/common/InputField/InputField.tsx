import { PropsWithChildren } from 'react';
import styled from 'styled-components';

export interface InputContainerProps {
  text: string;
  inputLength?: string;
}

export default function InputField({
  text,
  children,
  inputLength,
}: PropsWithChildren<InputContainerProps>) {
  return (
    <Wrapper>
      <Label htmlFor={text}>
        <span>{text}</span>
        <InputLengthText>{inputLength}</InputLengthText>
      </Label>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: ${({ theme }) => theme.colors.secondText};
`;

const InputLengthText = styled.span`
  letter-spacing: 1px;
`;
