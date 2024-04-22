import { css } from '@emotion/react';
import validateInput from '../validations/validateInput';
import { useState } from 'react';
import { InformationDetailType } from '../types/card';
import { CARD_NUMBER, CARD_OWNER, CARD_PERIOD } from '../constants/inputInformation';

const inputStyle = ({ borderColor, focusColor }: { borderColor: string; focusColor: string }) =>
  css({
    border: `1px solid ${borderColor}`,
    borderRadius: '4px',
    padding: '8px',
    fontSize: '11px',
    outline: 'none',
    width: '100%',

    '&:active, &:focus': {
      borderColor: `${focusColor}`,
    },

    '::-webkit-outer-spin-button, ::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: '0',
    },
  });

interface InputType {
  isPassword: boolean;
  informationDetail: InformationDetailType;
  placeholder: string;
  setState: (value: string) => void;
  setErrorMessage: (message: string) => void;
}

function Input({ isPassword, informationDetail, placeholder, setState, setErrorMessage }: InputType) {
  const maxLengthTable = {
    number: CARD_NUMBER.maxLength,
    owner: CARD_OWNER.maxLength,
    month: CARD_PERIOD.maxLength,
    year: CARD_PERIOD.maxLength,
  };

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

  const getInputType = () => {
    if (isPassword) return 'password';
    if (informationDetail === 'owner') return 'input';
    return 'number';
  };

  return (
    <input
      maxLength={maxLengthTable[informationDetail]}
      onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length > e.target.maxLength) e.target.value = e.target.value.slice(0, e.target.maxLength);
      }}
      type={getInputType()}
      min={0}
      css={inputStyle({ borderColor: isError ? '#FF3D3D' : '#acacac', focusColor: isError ? '#FF3D3D' : '#000' })}
      placeholder={placeholder}
      onChange={(e) => handleInputChange(e.target.value)}
    ></input>
  );
}

export default Input;
