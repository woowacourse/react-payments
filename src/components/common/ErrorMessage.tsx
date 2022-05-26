import React from "react";
import styled from "styled-components";

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessageCotainer = styled.span`
  width: 100%;
  padding: 8px 8px 8px 0;
  color: #f00;
  font-size: 4px;
  font-weight: 300;
  min-height: 25px;
`;

function ErrorMessage({ children }: ErrorMessageProps) {
  return <ErrorMessageCotainer>{children}</ErrorMessageCotainer>;
}

export default ErrorMessage;
