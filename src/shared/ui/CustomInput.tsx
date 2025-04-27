import React from 'react';
import { CustomInputProps } from '../model/types';
import * as S from './customInput.styles';

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ type, placeholder, name, onBlur, handleRef, maxLength, error }: CustomInputProps, ref) => {
    return (
      <S.CustomInput
        type={type}
        placeholder={placeholder}
        name={name}
        maxLength={maxLength}
        error={error}
        ref={ref}
        onChange={(e) => {
          handleRef?.(e);
        }}
        onBlur={(e) => {
          onBlur?.(e);
        }}
      />
    );
  }
);

export default CustomInput;
