import styled from "styled-components";

const InputBox = styled.div`
  display: flex;
  margin-top: 12px;
  border-radius: 8px;
`;

export const CardNumberInputBox = styled(InputBox)`
  justify-content: center;
  background: var(--input-background);
`;

export const DateInputBox = styled(CardNumberInputBox)`
  width: 40%;
  height: 48px;
`;

export const PasswordInputBox = styled(InputBox)`
  height: 48px;
`;
