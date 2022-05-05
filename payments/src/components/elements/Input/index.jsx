import { forwardRef } from 'react';
import './index.scss';

export const Input = forwardRef((props, ref) => {
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
