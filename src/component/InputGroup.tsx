import { InputContainer } from "../style/InputContainerStyle";
import styled from "styled-components";
interface InputGroupProps {
  label: string;
  children: React.ReactNode;
  errorKey: string;
  errorMessages: Record<string, string>;
}

const Label = styled.span`
  color: var(--color-black);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-body);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ErrorMessage = styled.p`
  color: var(--color-red);
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-caption);
`;

const ErrorMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InputGroup = ({
  label,
  children,
  errorKey,
  errorMessages,
}: InputGroupProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>{children}</InputContainer>
      <ErrorMessageContainer>
        <ErrorMessage>{errorMessages[errorKey]}</ErrorMessage>
      </ErrorMessageContainer>
    </Container>
  );
};

export default InputGroup;
