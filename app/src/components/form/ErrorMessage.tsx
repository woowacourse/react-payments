import styled from "@emotion/styled";

export function ErrorMessage({ messages }: { messages: string[] }) {
  return (
    messages && (
      <ErrorMessageList>
        {messages.map((message, index) => (
          <ErrorMessageItem key={index}>{message}</ErrorMessageItem>
        ))}
      </ErrorMessageList>
    )
  );
}

const ErrorMessageList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0;
  margin: 0.4rem 0;
`;

const ErrorMessageItem = styled.li`
  color: #ff3d3d;
  font-size: 9.5px;
  height: 1rem;
`;
