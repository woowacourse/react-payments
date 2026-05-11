import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";

interface ButtonProps {
  fullWidth?: boolean;
  rounded?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${(props) => props.fullWidth && "100%"};
  padding: 1.2rem 2.4rem;
  background-color: ${COLOR_PALETTE["BLACK-800"]};
  color: ${COLOR_PALETTE.WHITE};
  border-radius: ${({ rounded }) => (rounded ? "5px" : "0")};
  border: none;
  font-weight: 700;
  font-style: Bold;
  font-size: 1rem;
`;

export default Button;
