import React from 'react';
import { CustomInputProps } from '../model/types';
import * as S from './customInput.styles';

interface CustomInputAllProps extends CustomInputProps {
  ref?: React.Ref<HTMLInputElement>;
}

export default function CustomInput({ onBlur, handleRef, error, onChange, ref, ...props }: CustomInputAllProps) {
  return (
    <S.CustomInput
      error={error}
      ref={ref}
      onChange={(e) => {
        handleRef?.(e);
        onChange?.(e);
      }}
      onBlur={(e) => {
        onBlur?.(e);
      }}
      {...props}
    />
  );
}
