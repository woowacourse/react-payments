import { css } from '@emotion/react';
import validateInput from '../validations/validateInput';
import { useState } from 'react';
import { InformationDetailType } from '../types/cardType';
import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from '../constants/inputInformation';

interface InputType {
  isPassword: boolean;
  informationDetail: InformationDetailType;
  placeholder: string;
  setState: (s: string) => void;
  setErrorMessage: (message: string) => void;
  keyProp: string;
}

function Input({ isPassword, keyProp, informationDetail, placeholder, setState, setErrorMessage }: InputType) {
  const [isError, setIsError] = useState(false);
  const handleInputChange = (value: string) => {
    try {
      validateInput(value, informationDetail);
      setState(value);
      setErrorMessage('');
      setIsError(false);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setIsError(true);
      }
    }
  };

  const getInputMaxLength = (inputType: InformationDetailType): number => {
    const maxLengthTable = {
      number: CARD_NUMBER.maxLength,
      owner: CARD_OWNER.maxLength,
      month: CARD_PERIOD.maxLength,
      year: CARD_PERIOD.maxLength,
    };
    return maxLengthTable[inputType];
  };

  return (
    <>
      <input
        maxLength={getInputMaxLength(informationDetail)}
        type={isPassword ? 'password' : 'input'}
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
