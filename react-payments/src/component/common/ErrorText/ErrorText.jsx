import styled from "styled-components";
import { ColumnFlexWrapper } from "styles/wrapper";

const ErrorTitle = styled.div`
  color: tomato;
  font-size: 45px;
  font-weight: 600;
`;

const ErrorDescription = styled.div`
  font-size: 25px;
  font-weight: 500;
  text-align: center;
  letter-spacing: 0.1rem;
`;

const ErrorText = ({ label, children }) => {
  return (
    <ColumnFlexWrapper gap="50" mt="100">
      <ErrorTitle>{label}</ErrorTitle>
      <ErrorDescription>{children}</ErrorDescription>
    </ColumnFlexWrapper>
  );
};

export default ErrorText;
