import { css } from '@emotion/react';
import { AllKeysType, Validation } from '../../types/cardType';
import React from 'react';

interface InputType {
  type?: string;
  name: string;
  placeholder?: string;
  setValue: (name: string, value: string, validation: Validation) => void;
  maxLength?: number;
  validation: (value: string) => void;
  error?: string;
  handleError: (name: string, errorMessage: string) => void;
}

function Input({ name, setValue, maxLength, validation, error, handleError, ...props }: InputType) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name as AllKeysType;
    try {
      validation(value);
      setValue(name, value, validation);
      handleError(name, '');
    } catch (error) {
      if (error instanceof Error) {
        setValue(name, value, validation);
        handleError(name, error.message);
      }
    }
  };

  return (
    <input
      name={name}
      maxLength={maxLength}
      css={inputStyle({ border: error ? '#FF3D3D' : '#acacac', focusColor: error ? '#FF3D3D' : '#000' })}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInputChange(event)}
      {...props}
    ></input>
  );
}

const inputStyle = ({ border, focusColor }: { border: string; focusColor: string }) => css`
  border: 1px solid;
  border-color: ${border};
  border-radius: 4px;
  padding: 8px;
  font-size: 11px;
  outline: none;
  width: 100%;

  &:active,
  &:focus {
    border-color: ${focusColor};
  }
`;

export default Input;
