import type { ComponentPropsWithoutRef } from "react";
import styled, { css } from "styled-components";

type ButtonSize = "full" | "block";

type ButtonProps = Pick<
  ComponentPropsWithoutRef<"button">,
  "disabled" | "type" | "children" | "onClick"
> & {
  size: ButtonSize;
};

const Button = ({
  type = "button",
  disabled,
  size,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonRoot type={type} disabled={disabled} $size={size} onClick={onClick}>
      {children}
    </ButtonRoot>
  );
};

const getButtonStyle = (size: ButtonSize) => {
  if (size === "full") {
    return css`
      width: 100%;
      height: 52px;
    `;
  }

  if (size === "block") {
    return css`
      width: 100%;
      height: 44px;
      border-radius: 10px;
    `;
  }
};

const ButtonRoot = styled.button<{ $size: ButtonSize }>`
  ${({ $size }) => getButtonStyle($size)}
  color: #f3f3f3;
  background-color: #333333;
`;

export default Button;
