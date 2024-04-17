import { css } from '@emotion/react';
import isValidateInput from '../validations/isValidateInput';

interface InputType {
  type: 'number' | 'owner' | 'month' | 'year';
  placeholder: string;
  setState: (s: string) => void;
  setErrorMessage: (message: string) => void;
  keyProp: string;
}

function Input({ keyProp, type, placeholder, setState, setErrorMessage }: InputType) {
  const handleInputChange = (value: string) => {
    try {
      isValidateInput(value, type);
      setState(value);
      setErrorMessage('');
    } catch (error: Error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <input
        // maxLength={}
        key={keyProp}
        placeholder={placeholder}
        onChange={(e) => handleInputChange(e.target.value)}
      ></input>
    </>
  );
}

export default Input;
