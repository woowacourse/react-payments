import { css } from '@emotion/react';
import isValidateInput from '../validations/isValidateInput';
import { useState } from 'react';

interface InputType {
  type: 'number' | 'owner' | 'month' | 'year';
  placeholder: string;
  setState: (s: string) => void;
  setErrorMessage: (message: string) => void;
  keyProp: string;
}

function Input({ keyProp, type, placeholder, setState, setErrorMessage }: InputType) {
  const [isError, setIsError] = useState(false);
  const handleInputChange = (value: string) => {
    try {
      isValidateInput(value, type);
      setState(value);
      setErrorMessage('');
      setIsError(false);
    } catch (error: Error) {
      setErrorMessage(error.message);
      setIsError(true);
    }
  };

  return (
    <>
      <input
        // maxLength={}
        // name={}
        css={inputStyle({ border: isError ? '#FF3D3D' : '#acacac', focusColor: isError ? '#FF3D3D' : '#000' })}
        key={keyProp}
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e.target.value)}
      ></input>
    </>
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
