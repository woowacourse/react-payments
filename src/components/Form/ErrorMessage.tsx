import styled from "styled-components";

const Styled = {
  ErrorMessageWrapper: styled.p`
    color: red;
    font-size: 9.5px;
    font-weight: 400;
  `,
};

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return <Styled.ErrorMessageWrapper>{errorMessage}</Styled.ErrorMessageWrapper>;
};

export default ErrorMessage;
