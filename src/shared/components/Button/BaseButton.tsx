import type { ComponentPropsWithRef } from "react";
import styled, { css } from "styled-components";

type ButtonStyle = "base" | "rounded";

type ButtonProps = Pick<
  ComponentPropsWithRef<"button">,
  "className" | "disabled" | "type" | "children" | "onClick" | "ref"
> & {
  style: ButtonStyle;
};

const BaseButton = ({
  ref,
  className,
  type = "button",
  disabled,
  style = "base",
  children,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonRoot
      ref={ref}
      className={className}
      type={type}
      disabled={disabled}
      $style={style}
      onClick={onClick}
    >
      {children}
    </ButtonRoot>
  );
};

const getButtonStyle = (style: ButtonStyle) => {
  if (style === "base") {
    return css`
      width: 100%;
      height: 52px;
    `;
  }

  if (style === "rounded") {
    return css`
      display: block;
      width: 100%;
      height: 44px;
      border-radius: 6px;
    `;
  }
};

const ButtonRoot = styled.button<{ $style: ButtonStyle }>`
  ${({ $style }) => getButtonStyle($style)}
  color: #f3f3f3;
  background-color: #333333;
`;

export default BaseButton;
