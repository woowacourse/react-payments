import React from 'react';
import { CustomInputProps } from '../model/types';
import * as S from './customInput.styles';

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ onBlur, handleRef, error, ...props }, ref) => {
    return (
      <S.CustomInput
        error={error}
        ref={ref}
        onChange={(e) => {
          handleRef?.(e);
        }}
        onBlur={(e) => {
          onBlur?.(e);
        }}
        {...props}
      />
    );
  }
);
export default CustomInput;
