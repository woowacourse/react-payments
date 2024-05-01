import { SerializedStyles } from '@emotion/react';
import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  inputCss: SerializedStyles;
  onStateChange: (value: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onHandleClicked: () => void;
  ref: HTMLInputElement;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      inputCss,
      type,
      placeholder,
      onStateChange,
      maxLength,
      onClick,
      onBlur,
      onFocus,
      autoFocus,
      onHandleClicked,
    }: InputProps,
    ref,
  ) => {
    return (
      <input
        maxLength={maxLength}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength);
        }}
        type={type}
        min={0}
        css={inputCss}
        placeholder={placeholder}
        onChange={(e) => {
          onHandleClicked();
          onStateChange(e.target.value);
        }}
        onClick={onClick}
        onBlur={onBlur}
        onFocus={onFocus}
        autoFocus={autoFocus}
        ref={ref}
      />
    );
  },
);

export default Input;
