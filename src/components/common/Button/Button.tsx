import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";

interface ButtonProps {
  fullWidth?: boolean;
  rounded?: boolean;
  disabled?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  padding: 1.2rem 2.4rem;
  background-color: ${({ disabled }) =>
    disabled ? COLOR_PALETTE.GRAY : COLOR_PALETTE["BLACK-800"]};
  color: ${COLOR_PALETTE.WHITE};
  border-radius: ${({ rounded }) => (rounded ? "5px" : "0")};
  border: none;
  font-weight: 700;
  font-size: 1rem;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export default Button;
