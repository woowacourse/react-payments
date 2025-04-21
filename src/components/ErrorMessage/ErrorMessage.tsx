/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Text from "../Text/Text";

type errorMessageType = {
  error: boolean;
  message: string;
};

const ErrorMessage = ({ error, message }: errorMessageType) => {
  return (
    <div css={errorTextWrapperStyle(error)}>
      <Text type="error" text={message || "유효하지 않은 값입니다."} />
    </div>
  );
};

export default ErrorMessage;

const errorTextWrapperStyle = (error: boolean) => css`
  opacity: ${error ? "1" : "0"};
`;
