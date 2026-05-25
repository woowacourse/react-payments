import styled from "@emotion/styled";

export function ErrorMessage({ messages, style }: { messages: string[]; style?: React.CSSProperties }) {
  return (
    messages && (
      <ErrorMessageList style={style}>
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
  margin-top: 0.4rem;
`;

const ErrorMessageItem = styled.li`
  color: #e22222;
  font-size: 9.5px;
  height: 1rem;
`;
