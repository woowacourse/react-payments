import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";

interface InputProps {
  state?: "default" | "error";
  fullWidth?: boolean;
}

const Input = styled.input<InputProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border: 1px solid
    ${({ state }) =>
      state === "error" ? COLOR_PALETTE.ERROR : COLOR_PALETTE["GREY-400"]};
  border-radius: 2px;
  &::placeholder {
    color: ${COLOR_PALETTE["GREY-400"]};
  }
  padding: 8px;
  &:focus {
    outline: none;
    border: 1px solid
      ${({ state }) =>
        state === "error" ? COLOR_PALETTE.ERROR : COLOR_PALETTE["BLACK-900"]};
  }
`;

export default Input;
