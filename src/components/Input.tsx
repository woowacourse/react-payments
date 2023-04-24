import { forwardRef, InputHTMLAttributes, ChangeEventHandler } from "react";
import styled from "styled-components";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(({ ...props }, ref) => {
  return <S.Input ref={ref} {...props} />;
});

const S = {
  Input: styled.input`
    background: var(--input-background);
    width: 14vw;
    margin: 0 2.2vw;
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;
  `,
};

export default Input;
