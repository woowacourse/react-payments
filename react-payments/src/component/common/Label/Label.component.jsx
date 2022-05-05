import styled, { css } from "styled-components";

const Label = styled.label`
  display: flex;
  align-items: center;

  font-size: 14px;
  line-height: 14px;
  margin-top: 20px;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.header};

  ${({ type }) =>
    type === "user-name" &&
    css`
      display: flex;
      width: 90%;
      justify-content: space-between;
    `}
`;

export default Label;
