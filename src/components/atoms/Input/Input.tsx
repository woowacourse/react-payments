import { InputHTMLAttributes, forwardRef } from "react";
import * as S from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
  ariaLabel?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      id,
      type,
      maxLength,
      placeholder,
      value,
      ariaLabel,
      isError,
      onChange,
      onBlur,
      onFocus,
      ...props
    },
    ref
  ) => {
    return (
      <S.Input
        id={id}
        ref={ref}
        type={type ? type : "text"}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        aria-label={ariaLabel}
        isError={isError}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
