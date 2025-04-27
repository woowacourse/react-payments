import React from 'react';
import { validateCardNumber } from '../../validation/validation';
import Description from '../Description';
import Input from '../Input'; // 수정된 Input 컴포넌트 사용
import InputGroup from '../InputGroup'; // 수정된 InputGroup 컴포넌트 사용
import { CardInputProps } from '../../types/CardInputTypes';
import { ErrorMessagesType } from '../../types/ErrorMessagesType';

interface CardNumberInputProps {
  cardInput: CardInputProps;
  setCardInput: React.Dispatch<React.SetStateAction<CardInputProps>>;
  errorMessages: ErrorMessagesType;
  handleErrorMessages: (key: keyof ErrorMessagesType, message: string) => void;
  handleCardNumberErrorMessages: () => string;
}

export const CardNumberInput: React.FC<CardNumberInputProps> = ({
  handleCardNumberErrorMessages,
  setCardInput,
  handleErrorMessages,
}) => {
  return (
    <>
      <Description
        headText="결제할 카드 번호를 입력해 주세요."
        detailText="본인 명의의 카드만 결제 가능합니다."
      />
      <InputGroup
        label="카드 번호"
        errorMessages={handleCardNumberErrorMessages()}
      >
        <Input
          maxLength={4}
          placeholder="1234"
          validate={validateCardNumber}
          handleErrorMessage={message => handleErrorMessages('first', message)}
          onChange={value => {
            setCardInput((prev: CardInputProps) => ({
              ...prev,
              first: value === '' ? null : Number(value),
            }));
          }}
          name="cardNumber1"
        />
        <Input
          maxLength={4}
          placeholder="1234"
          validate={validateCardNumber}
          handleErrorMessage={message => handleErrorMessages('second', message)}
          onChange={value => {
            setCardInput((prev: CardInputProps) => ({
              ...prev,
              second: value === '' ? null : Number(value),
            }));
          }}
          name="cardNumber2"
        />
        <Input
          maxLength={4}
          placeholder="1234"
          validate={validateCardNumber}
          handleErrorMessage={message => handleErrorMessages('third', message)}
          onChange={value => {
            setCardInput((prev: CardInputProps) => ({
              ...prev,
              third: value === '' ? null : Number(value),
            }));
          }}
          name="cardNumber3"
        />
        <Input
          maxLength={4}
          placeholder="1234"
          validate={validateCardNumber}
          handleErrorMessage={message => handleErrorMessages('fourth', message)}
          onChange={value => {
            setCardInput((prev: CardInputProps) => ({
              ...prev,
              fourth: value === '' ? null : Number(value),
            }));
          }}
          name="cardNumber4"
        />
      </InputGroup>
    </>
  );
};
