import type { ComponentPropsWithRef } from "react";
import styled from "styled-components";
import { colors } from "../../../../../../styles/color";

type StrokeModeType = "default" | "error";

const STROKE_MODE_COLOR: Record<StrokeModeType, string> = {
  default: colors.border.default,
  error: colors.border.error,
};

type InputPropsType = ComponentPropsWithRef<"input"> & {
  strokeMode?: StrokeModeType;
};

const Input = ({
  ref,
  strokeMode = "default",
  type = "text",
  ...rest
}: InputPropsType) => {
  return (
    <StyledInput ref={ref} $strokeMode={strokeMode} type={type} {...rest} />
  );
};

export default Input;

const StyledInput = styled.input<{ $strokeMode: StrokeModeType }>`
  font-size: 11px;
  font-weight: 400;
  color: #000;
  padding: 8px;
  border: 1px solid ${(props) => STROKE_MODE_COLOR[props.$strokeMode]};
  border-radius: 4px;
  outline: none;
  height: 32px;

  &:focus {
    border-color: ${(props) =>
      props.$strokeMode === "error"
        ? STROKE_MODE_COLOR.error
        : colors.border.focus};
  }

  &:focus-visible {
    box-shadow: 0 0 0 1.2px
      ${(props) =>
        props.$strokeMode === "error"
          ? "rgba(255,61,61,0.25)"
          : "rgba(0,0,0,0.2)"};
  }
`;
