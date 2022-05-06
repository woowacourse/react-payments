import styled from "styled-components";
import { css } from "styled-components";

const CardNameInput = styled.input`
  border: transparent;
  text-align: center;
  border-bottom: 1.5px solid
    ${({ theme, ready }) =>
      ready ? theme.colors.successInput : theme.colors.errorMessage};
  &:focus {
    outline: none;
  }
  ${({ size }) =>
    size === "small"
      ? css`
          width: 122px;
          height: 18px;
          font-size: 12px;
        `
      : css`
          width: 244px;
          height: 28px;
          font-size: 18px;
        `}
`;

export default CardNameInput;
