import styled from 'styled-components';

interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  errorMessage: string;
  id: string;
}

const FormField = ({ label, children, errorMessage, id }: FormFieldProps) => {
  return (
    <Container>
      <Label htmlFor={id}>{label}</Label>
      <InputContainer>{children}</InputContainer>
      <ErrorMessageContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </ErrorMessageContainer>
    </Container>
  );
};

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const Label = styled.label`
  color: var(--color-black);
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-body);
`;

const Container = styled.div`
  width: 100%;
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

export default FormField;
