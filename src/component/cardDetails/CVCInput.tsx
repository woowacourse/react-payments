import React, { useState, useCallback } from 'react';
import Description from '../Description';
import Input from '../Input';
import InputGroup from '../InputGroup';
import { ErrorMessagesType } from '../../types/ErrorMessagesType';
import { CardInputProps } from '../../types/CardInputTypes';
import { validateCardCVC } from '../../validation/validation';
interface CVCInputProps {
  handleErrorMessages: (key: keyof ErrorMessagesType, message: string) => void;
  setCardInput: React.Dispatch<React.SetStateAction<CardInputProps>>;
  errorMessages: ErrorMessagesType;
  cardInput: CardInputProps;
}

export const CVCInput: React.FC<CVCInputProps> = ({
  handleErrorMessages,
  errorMessages,
  setCardInput,
  cardInput,
}) => {
  const [cvcValue, setCvcValue] = useState(cardInput.CVC?.toString() ?? '');

  const handleCVCChange = useCallback(
    (value: string) => {
      setCvcValue(value);

      const errorMessage = validateCardCVC(value);
      if (errorMessage) {
        handleErrorMessages('CVC', errorMessage);
        return;
      }

      handleErrorMessages('CVC', '');

      setCardInput(prev => ({
        ...prev,
        CVC: value === '' ? null : Number(value),
      }));
    },
    [setCardInput, handleErrorMessages, validateCardCVC],
  );

  return (
    <>
      <Description headText="CVC 번호를 입력해 주세요" />
      <InputGroup label="CVC" errorMessages={errorMessages.CVC}>
        <Input
          maxLength={3}
          placeholder="123"
          value={cvcValue}
          onChange={handleCVCChange}
          isError={!!errorMessages.CVC}
          name="cvcNumber"
        />
      </InputGroup>
    </>
  );
};
