import { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  border?: string;
  background?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: number;
}

const Wrapper = styled.button<ButtonProps>`
  background-color: transparent;

  ${({
    disabled,
    width,
    height,
    border,
    background,
    borderRadius,
    fontSize,
    fontWeight,
  }) => css`
    cursor: ${disabled ? "not-allowed" : "pointer"};
    color: ${disabled ? "#bebbbb" : "#000000"};
    border: ${border ? border : "none"};
    width: ${width ? width : "auto"};
    height: ${height ? height : "auto"};
    background: ${background ? "#e5e5e5" : background};
    border-radius: ${borderRadius ? borderRadius : "5px"};
    font-size: ${fontSize ? fontSize : "14px"}
    font-weight: ${fontWeight ? fontWeight : 500}
  `}
`;

export default function Button({
  children,
  ...rest
}: React.PropsWithChildren<ButtonProps>) {
  return <Wrapper {...rest}>{children}</Wrapper>;
}
