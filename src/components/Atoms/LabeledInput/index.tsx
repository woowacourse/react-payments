import styled from 'styled-components';
import { ReactNode } from 'react';

interface LabeledInputProps {
  text: string;
  children: ReactNode;
}

function LabeledInput({ text, children }: LabeledInputProps) {
  return (
    <Container>
      <InputLabelText>{text}</InputLabelText>
      {children}
    </Container>
  );
}

export default LabeledInput;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

const InputLabelText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: #525252;
`;
