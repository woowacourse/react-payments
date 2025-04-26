import React from 'react';
import { CustomInputProps } from '../model/types';
import * as S from './customInput.styles';

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ type, placeholder, name, onChange, maxLength, error }: CustomInputProps, ref) => {
    return (
      <S.CustomInput
        type={type}
        placeholder={placeholder}
        name={name}
        onBlur={onChange}
        maxLength={maxLength}
        error={error}
        ref={ref}
      />
    );
  }
);

export default CustomInput;
