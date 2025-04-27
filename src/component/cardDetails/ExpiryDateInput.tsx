import React, { useState } from 'react';
import Description from '../Description';
import InputGroup from '../InputGroup';
import Input from '../Input';
import { ErrorMessagesType } from '../../types/ErrorMessagesType';
import { CardInputProps } from '../../types/CardInputTypes';

interface ExpiryDateInputProps {
  handlePeriodErrorMessages: () => string;
  validateCardExpirationDateMM: (value: string) => string | undefined;
  validateCardExpirationDateYY: (
    value: string,
    month?: string,
  ) => string | undefined;
  setCardInput: React.Dispatch<React.SetStateAction<CardInputProps>>;
  handleErrorMessages: (key: keyof ErrorMessagesType, message: string) => void;
}

export const ExpiryDateInput: React.FC<ExpiryDateInputProps> = ({
  handlePeriodErrorMessages,
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
  setCardInput,
  handleErrorMessages,
}) => {
  const [mmValue, setMmValue] = useState<string>('');

  const expiryDateFields = [
    {
      key: 'MM',
      placeholder: 'MM',
      maxLength: 2,
      validate: validateCardExpirationDateMM,
      onChange: (value: string) => {
        setMmValue(value);
        setCardInput((prev: CardInputProps) => ({
          ...prev,
          MM: value === '' ? null : Number(value),
        }));
      },
    },
    {
      key: 'YY',
      placeholder: 'YY',
      maxLength: 2,
      validate: (value: string) => validateCardExpirationDateYY(value, mmValue),
      onChange: (value: string) => {
        setCardInput((prev: CardInputProps) => ({
          ...prev,
          YY: value === '' ? null : Number(value),
        }));
      },
    },
  ] as const;

  return (
    <>
      <Description
        headText="카드 유효기간을 입력해 주세요"
        detailText="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <InputGroup label="유효기간" errorMessages={handlePeriodErrorMessages()}>
        {expiryDateFields.map(
          ({ key, placeholder, maxLength, validate, onChange }) => (
            <Input
              key={key}
              maxLength={maxLength}
              placeholder={placeholder}
              validate={validate}
              handleErrorMessage={message =>
                handleErrorMessages(key as keyof ErrorMessagesType, message)
              }
              onChange={onChange}
              name={`expiry-${key}`}
            />
          ),
        )}
      </InputGroup>
    </>
  );
};
