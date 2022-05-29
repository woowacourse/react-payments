import styled from "styled-components";

const MessageBox = styled.div<{ styleType: "success" | "error" }>`
  margin-top: 10px;
  font-size: 12px;
  color: ${({ styleType, theme }) =>
    styleType === "success"
      ? theme.colors.successMessage
      : theme.colors.errorMessage};
`;

export default MessageBox;
