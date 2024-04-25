import { ReactNode } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100px; */
`;

const Label = styled.p`
  color: var(--Text, #0a0d13);
  font-size: 12px;
  margin-bottom: 8px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  /* height: 2rem; */
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 8px;
`;

const ErrorBox = styled.div`
  color: red;
  font-size: 9.5px;
`;

interface Props {
  label : string
  count : number
  children : ReactNode
  errorMessages : { [key: number]: string }
}

export default function InputField({
  label,
  children,
  errorMessages
}: Props) {


  return (
      <Container>
        <Label>{label}</Label>
        <InputBox>
          {children}
        </InputBox>
        <ErrorBox>
          {Object.values(errorMessages).find((message) => message !== '')}
        </ErrorBox>
      </Container>
  );
}

