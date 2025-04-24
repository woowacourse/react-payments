import styled from 'styled-components';

interface InputGroupProps {
  label: string;
  children: React.ReactNode;
  errorMessages: string;
}

export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Label = styled.span`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.body};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  font-weight: ${({ theme }) => theme.fontWeights.caption};
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
        <ErrorMessage>{errorMessages}</ErrorMessage>
      </ErrorMessageContainer>
    </Container>
  );
};

export default InputGroup;
