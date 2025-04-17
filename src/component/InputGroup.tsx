import styled from "styled-components";

//FIX: 첫번째에서 오류 메세지 덮어씌워지는 현상고치기
interface InputGroupProps {
  label: string;
  children: React.ReactNode;
  errorMessages: () => string;
}

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

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

const InputGroup = ({ label, children, errorMessages }: InputGroupProps) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>{children}</InputContainer>
      <ErrorMessageContainer>
        <ErrorMessage>{errorMessages()}</ErrorMessage>
      </ErrorMessageContainer>
    </Container>
  );
};

export default InputGroup;
