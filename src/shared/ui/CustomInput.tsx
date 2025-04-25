import React from 'react';
import { CustomInputProps } from '../model/types';
import * as S from './customInput.styles';

// Forward the ref to allow it to be passed correctly
const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ type, placeholder, name, onChange, maxLength, error }: CustomInputProps, ref) => {
    return (
      <S.CustomInput
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        maxLength={maxLength}
        error={error}
        ref={ref} // Now ref is passed correctly
      />
    );
  }
);

export default CustomInput;
