import React from 'react';
import Description from '../Description';
import InputGroup from '../InputGroup';
import Input from '../Input';
import { ErrorMessagesType } from '../../types/ErrorMessagesType';
import { CardInputProps } from '../../types/CardInputTypes';
import { useState } from 'react';

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
  return (
    <>
      <Description
        headText="카드 유효기간을 입력해 주세요"
        detailText="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <InputGroup label="유효기간" errorMessages={handlePeriodErrorMessages()}>
        <Input
          maxLength={2}
          placeholder="MM"
          validate={validateCardExpirationDateMM}
          handleErrorMessage={message => handleErrorMessages('MM', message)}
          onChange={value => {
            setMmValue(value);
            setCardInput((prev: CardInputProps) => ({
              ...prev,
              MM: value === '' ? null : Number(value),
            }));
          }}
        />
        <Input
          maxLength={2}
          placeholder="YY"
          validate={value => validateCardExpirationDateYY(value, mmValue)}
          handleErrorMessage={message => handleErrorMessages('YY', message)}
          onChange={value => {
            setCardInput((prev: CardInputProps) => ({
              ...prev,
              YY: value === '' ? null : Number(value),
            }));
          }}
        />
      </InputGroup>
    </>
  );
};
