import React, { useState, useCallback } from 'react';
import Description from '../Description';
import InputGroup from '../InputGroup';
import Input from '../Input';
import { ErrorMessagesType } from '../../types/ErrorMessagesType';
import { CardInputProps } from '../../types/CardInputTypes';
import {
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
} from '../../validation/validation';

interface ExpiryDateInputProps {
  handlePeriodErrorMessages: () => string;
  setCardInput: React.Dispatch<React.SetStateAction<CardInputProps>>;
  handleErrorMessages: (key: keyof ErrorMessagesType, message: string) => void;
  cardInput: CardInputProps;
  errorMessages: ErrorMessagesType;
}

export const ExpiryDateInput: React.FC<ExpiryDateInputProps> = ({
  handlePeriodErrorMessages,
  setCardInput,
  handleErrorMessages,
  cardInput,
  errorMessages,
}) => {
  const [expiryValues, setExpiryValues] = useState({
    MM: cardInput.MM?.toString() || '',
    YY: cardInput.YY?.toString() || '',
  });

  const handleMMChange = useCallback(
    (value: string) => {
      setExpiryValues(prev => ({ ...prev, MM: value }));

      const errorMessage = validateCardExpirationDateMM(value);
      if (errorMessage) {
        handleErrorMessages('MM', errorMessage);
        return;
      }

      handleErrorMessages('MM', '');

      setCardInput(prev => ({
        ...prev,
        MM: value === '' ? null : Number(value),
      }));
    },
    [setCardInput, handleErrorMessages, validateCardExpirationDateMM],
  );

  const handleYYChange = useCallback(
    (value: string) => {
      setExpiryValues(prev => ({ ...prev, YY: value }));
      const errorMessage = validateCardExpirationDateYY(value, expiryValues.MM);
      if (errorMessage) {
        handleErrorMessages('YY', errorMessage);
        return;
      }

      handleErrorMessages('YY', '');

      setCardInput(prev => ({
        ...prev,
        YY: value === '' ? null : Number(value),
      }));
    },
    [
      setCardInput,
      handleErrorMessages,
      validateCardExpirationDateYY,
      expiryValues.MM,
    ],
  );

  const expiryDateFields = [
    {
      key: 'MM',
      placeholder: 'MM',
      maxLength: 2,
      value: expiryValues.MM,
      onChange: handleMMChange,
      isError: !!errorMessages.MM,
    },
    {
      key: 'YY',
      placeholder: 'YY',
      maxLength: 2,
      value: expiryValues.YY,
      onChange: handleYYChange,
      isError: !!errorMessages.YY,
    },
  ];

  return (
    <>
      <Description
        headText="카드 유효기간을 입력해 주세요"
        detailText="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <InputGroup label="유효기간" errorMessages={handlePeriodErrorMessages()}>
        {expiryDateFields.map(
          ({ key, placeholder, maxLength, value, onChange, isError }) => (
            <Input
              key={key}
              maxLength={maxLength}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              isError={isError}
              name={`expiry-${key}`}
            />
          ),
        )}
      </InputGroup>
    </>
  );
};
