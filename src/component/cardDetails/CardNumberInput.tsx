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

export const CardNumberInput: React.FC<CardNumberInputProps> = ({
  handleCardNumberErrorMessages,
  setCardInput,
  handleErrorMessages,
}) => {
  // 카드 번호 입력 필드 정의
  const cardNumberFields = [
    { key: 'first', placeholder: '1234' },
    { key: 'second', placeholder: '1234' },
    { key: 'third', placeholder: '1234' },
    { key: 'fourth', placeholder: '1234' },
  ] as const;

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
        {cardNumberFields.map(({ key, placeholder }) => (
          <Input
            key={key}
            maxLength={4}
            placeholder={placeholder}
            validate={validateCardNumber}
            handleErrorMessage={message =>
              handleErrorMessages(key as keyof ErrorMessagesType, message)
            }
            onChange={value => {
              setCardInput((prev: CardInputProps) => ({
                ...prev,
                [key]: value === '' ? null : Number(value),
              }));
            }}
            name={`cardNumber-${key}`}
          />
        ))}
      </InputGroup>
    </>
  );
};
