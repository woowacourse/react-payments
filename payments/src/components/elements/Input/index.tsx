import React, { forwardRef } from 'react';
import './index.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'password' | 'text';
}

export const Input = forwardRef((props: InputProps, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { type, value, placeholder, onChange, onKeyDown, className, ...otherProps } = props;
  return (
    <input
      ref={ref}
      onChange={onChange}
      type={type}
      value={value}
      placeholder={placeholder}
      onKeyDown={onKeyDown}
      className={className || 'input__contents'}
      name={props.name}
      maxLength={otherProps.maxLength}
    />
  );
});
