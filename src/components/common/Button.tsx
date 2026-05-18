import { COLOR_PALETTE } from "@/styles/colorPalette";
import styled from "@emotion/styled";

interface ButtonProps {
  fullWidth?: boolean;
  fixedBottom?: boolean;
  dashed?: boolean;
}

const Button = styled.button<ButtonProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  height: ${({ fixedBottom }) => (fixedBottom ? "auto" : "2.8rem")};
  padding: ${({ fixedBottom }) => (fixedBottom ? "1.25rem" : "0.5rem")};
  border-radius: ${({ fixedBottom }) => (fixedBottom ? "0" : "0.3rem")};
  background-color: ${({ dashed }) =>
    dashed ? COLOR_PALETTE.WHITE : COLOR_PALETTE["BLACK-800"]};
  color: ${({ dashed }) =>
    dashed ? COLOR_PALETTE["GREY-500"] : COLOR_PALETTE.WHITE};
  font-size: 1rem;
  font-weight: ${({ fixedBottom }) => (fixedBottom ? 700 : 400)};
  cursor: pointer;
  border: ${({ dashed }) =>
    dashed ? `1px dashed ${COLOR_PALETTE["GREY-200"]}` : "none"};

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
