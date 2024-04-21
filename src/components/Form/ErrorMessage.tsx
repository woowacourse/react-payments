import styled from "styled-components";

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return <ErrorMessageStyled>{errorMessage}</ErrorMessageStyled>;
};

const ErrorMessageStyled = styled.p`
  color: red;
  font-size: 9.5px;
  font-weight: 400;
`;

export default ErrorMessage;
