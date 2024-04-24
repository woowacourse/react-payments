import styled from "styled-components";

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <ErrorMessageContainer isVisible={!!errorMessage}>
      <ErrorMessageStyled>{errorMessage}</ErrorMessageStyled>
    </ErrorMessageContainer>
  );
};

const ErrorMessageContainer = styled.div<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
`;

const ErrorMessageStyled = styled.p`
  color: red;
  font-size: 9.5px;
  font-weight: 400;
`;

export default ErrorMessage;
