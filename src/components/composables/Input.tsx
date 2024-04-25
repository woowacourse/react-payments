import { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, type, placeholder, id, isError, maxLength, onKeyDown, onBlur }, ref) => {
    return (
      <S.Input
        ref={ref}
        value={value}
        onChange={onChange}
        type={type}
        maxLength={maxLength}
        placeholder={placeholder}
        id={id}
        onKeyDown={onKeyDown}
        $isError={isError}
        onBlur={onBlur}
      />
    );
  },
);

export default Input;
