import React, { forwardRef } from "react";
import "./index.scss";

interface InputProps {
  onChange: ({ target }: { target: HTMLInputElement }) => void;
  type?: string;
  maxLength?: number;
  value: string;
  placeholder?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  testId?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <input
    ref={ref}
    onChange={props.onChange}
    type={props.type}
    maxLength={props.maxLength}
    value={props.value}
    placeholder={props.placeholder}
    onKeyDown={props.onKeyDown}
    className="input__contents"
    data-testid={props.testId}
  />
));

export default Input;
