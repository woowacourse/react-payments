import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";

interface ButtonProps {
  fixedBottom?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${({ fixedBottom }) => (fixedBottom ? "100%" : "20rem")};
  height: ${({ fixedBottom }) => (fixedBottom ? "auto" : "2.8rem")};
  padding: ${({ fixedBottom }) => (fixedBottom ? "1.25rem" : "0.5rem")};
  border-radius: ${({ fixedBottom }) => (fixedBottom ? "0" : "0.3rem")};
  background-color: ${COLOR_PALETTE["BLACK-800"]};
  color: ${COLOR_PALETTE.WHITE};
  font-size: 1rem;
  font-weight: ${({ fixedBottom }) => (fixedBottom ? 700 : 400)};
  cursor: pointer;
  border: none;

  ${({ fixedBottom }) =>
    fixedBottom &&
    `
      position: fixed;
      bottom: 0;
      left: 0;
       z-index: 100;
    `}
`;

export default Button;
