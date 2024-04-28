import styled from "styled-components";

const Styled = {
  ErrorMessageLayout: styled.p`
    color: red;
    font-size: 9.5px;
    font-weight: 400;
  `,
};

const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return <Styled.ErrorMessageLayout>{errorMessage}</Styled.ErrorMessageLayout>;
};

export default ErrorMessage;
