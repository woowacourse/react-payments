import { SerializedStyles } from '@emotion/react';
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  inputCss: SerializedStyles;
  onStateChange: (value: string) => void;
}

function Input({ inputCss, type, placeholder, onStateChange, maxLength }: InputProps) {
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
      onChange={(e) => onStateChange(e.target.value)}
    />
  );
}

export default Input;
