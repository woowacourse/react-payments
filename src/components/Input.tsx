import { forwardRef, InputHTMLAttributes, ChangeEventHandler } from "react";
import styled from "styled-components";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  margin?: string;
  borderRadius?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(
  ({ width, margin, borderRadius, ...props }, ref) => {
    return (
      <S.Input
        width={width}
        margin={margin}
        borderRadius={borderRadius}
        ref={ref}
        {...props}
      />
    );
  }
);

const S = {
  Input: styled.input<InputProps>`
    background: var(--input-background);
    width: ${({ width }) => width ?? "14vw"};
    margin: ${({ margin }) => margin ?? "0 2.2vw"};
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
    border-radius: ${({ borderRadius }) => borderRadius ?? "0"};
  `,
};

export default Input;
