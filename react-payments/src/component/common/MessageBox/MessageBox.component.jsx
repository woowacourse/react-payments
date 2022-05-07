import styled from "styled-components";

const MessageBox = styled.div`
  margin-top: 10px;
  font-size: 12px;
  color: ${({ type, theme }) =>
    type === "success"
      ? theme.colors.successMessage
      : theme.colors.errorMessage};
`;

export default MessageBox;
