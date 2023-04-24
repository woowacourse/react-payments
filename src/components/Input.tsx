import { forwardRef, InputHTMLAttributes, ChangeEventHandler } from "react";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  display?: string;
  width?: string;
  margin?: string;
  padding?: string;
  borderRadius?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(
  ({ width, margin, borderRadius, display, padding, ...props }, ref) => {
    return (
      <S.Input
        display={display}
        width={width}
        margin={margin}
        padding={padding}
        borderRadius={borderRadius}
        ref={ref}
        {...props}
      />
    );
  }
);

const S = {
  Input: styled.input<InputProps>`
    display: ${({ display }) => display ?? "initial"};
    background: var(--input-background);
    width: ${({ width }) => width ?? "14vw"};
    height: 48px;
    margin: ${({ margin }) => margin ?? "0 2.2vw"};
    padding: ${({ padding }) => padding ?? "0"};
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
    border-radius: ${({ borderRadius }) => borderRadius ?? "0"};
  `,
};

export default Input;
