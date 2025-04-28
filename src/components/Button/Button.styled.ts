import styled from "styled-components";

interface ButtonCSSProps {
  variant: "success" | "home";
}

export const ButtonCSS = styled.button<ButtonCSSProps>`
  height: 52px;

  font-weight: 700;
  font-size: 16px;

  background-color: black;
  color: white;

  cursor: pointer;

  width: ${({ variant }) => (variant === "home" ? "30%" : "100%")};
  position: ${({ variant }) => (variant === "home" ? "fixed" : null)};
  bottom: ${({ variant }) => (variant === "home" ? "0" : "auto")};
`;
