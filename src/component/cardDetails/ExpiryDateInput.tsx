import React from 'react';
import Description from '../Description';
import InputGroup from '../InputGroup';
import Input from '../Input';
import { ErrorMessagesType } from '../../types/ErrorMessagesType';
import { CardInputProps } from '../../types/CardInputTypes';

interface ExpiryDateInputProps {
  handlePeriodErrorMessages: () => string;
  validateCardExpirationDateMM: (value: string) => string | undefined;
  validateCardExpirationDateYY: (value: string) => string | undefined;
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
          setCardInput={setCardInput}
          inputKey="MM"
          handleErrorMessage={message => handleErrorMessages('MM', message)}
        />
        <Input
          maxLength={2}
          placeholder="YY"
          validate={validateCardExpirationDateYY}
          setCardInput={setCardInput}
          inputKey="YY"
          handleErrorMessage={message => handleErrorMessages('YY', message)}
        />
      </InputGroup>
    </>
  );
};
