import React from 'react';
import { validateCardNumber } from '../../validation/validation';
import Description from '../Description';
import Input from '../Input';
import InputGroup from '../InputGroup';
import { CardInputProps } from '../../types/CardInputTypes';
import { ErrorMessagesType } from '../../types/ErrorMessagesType';

interface CardNumberInputProps {
  cardInput: CardInputProps;
  setCardInput: React.Dispatch<React.SetStateAction<CardInputProps>>;
  errorMessages: ErrorMessagesType;
  handleErrorMessages: (key: keyof ErrorMessagesType, message: string) => void;
  handleCardNumberErrorMessages: () => string;
}

export const CardNumberInput: React.FC<CardNumberInputProps> = ({ handleCardNumberErrorMessages, setCardInput, handleErrorMessages }) => {
  return (
    <>
      <Description headText="결제할 카드 번호를 입력해 주세요." detailText="본인 명의의 카드만 결제 가능합니다." />
      <InputGroup label="카드 번호" errorMessages={handleCardNumberErrorMessages()}>
        <Input
          maxLength={4}
          placeholder="1234"
          setCardInput={setCardInput}
          validate={validateCardNumber}
          inputKey="first"
          handleErrorMessage={message => handleErrorMessages('first', message)}
        />
        <Input
          maxLength={4}
          placeholder="1234"
          validate={validateCardNumber}
          setCardInput={setCardInput}
          inputKey="second"
          handleErrorMessage={message => handleErrorMessages('second', message)}
        />
        <Input
          maxLength={4}
          placeholder="1234"
          setCardInput={setCardInput}
          validate={validateCardNumber}
          inputKey="third"
          handleErrorMessage={message => handleErrorMessages('third', message)}
        />
        <Input
          maxLength={4}
          placeholder="1234"
          setCardInput={setCardInput}
          validate={validateCardNumber}
          inputKey="fourth"
          handleErrorMessage={message => handleErrorMessages('fourth', message)}
        />
      </InputGroup>
    </>
  );
};
