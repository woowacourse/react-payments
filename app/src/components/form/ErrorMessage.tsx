import styled from "@emotion/styled";

export function ErrorMessage({ message }: { message: string }) {
  return <ErrorMessageContainer>{message}</ErrorMessageContainer>;
}

const ErrorMessageContainer = styled.p`
  color: #ff3d3d;
  font-size: 9.5px;
`;
