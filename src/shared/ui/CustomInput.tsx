import React from 'react';
import { CustomInputProps } from '../model/types';
import * as S from './customInput.styles';

interface CustomInputAllProps extends CustomInputProps {
  refProp?: React.Ref<HTMLInputElement>;
}

export default function CustomInput({ onBlur, handleRef, error, onChange, refProp, ...props }: CustomInputAllProps) {
  return (
    <S.CustomInput
      error={error}
      ref={refProp}
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
