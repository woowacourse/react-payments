import React, { useState, useCallback } from 'react';
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
  cardInput,
  setCardInput,
  errorMessages,
  handleErrorMessages,
  handleCardNumberErrorMessages,
}) => {
  const [cardNumberValues, setCardNumberValues] = useState({
    first: cardInput.first?.toString() || '',
    second: cardInput.second?.toString() || '',
    third: cardInput.third?.toString() || '',
    fourth: cardInput.fourth?.toString() || '',
  });

  const cardNumberFields = [
    { key: 'first', placeholder: '1234' },
    { key: 'second', placeholder: '1234' },
    { key: 'third', placeholder: '1234' },
    { key: 'fourth', placeholder: '1234' },
  ] as const;

  const handleCardNumberChange = useCallback(
    (fieldKey: keyof typeof cardNumberValues, value: string) => {
      setCardNumberValues(prev => ({
        ...prev,
        [fieldKey]: value,
      }));

      const errorMessage = validateCardNumber(value);
      if (errorMessage) {
        handleErrorMessages(fieldKey as keyof ErrorMessagesType, errorMessage);
        return;
      }

      handleErrorMessages(fieldKey as keyof ErrorMessagesType, '');

      setCardInput(prev => ({
        ...prev,
        [fieldKey]: value === '' ? null : Number(value),
      }));
    },
    [setCardInput, handleErrorMessages],
  );

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
            value={cardNumberValues[key as keyof typeof cardNumberValues]}
            onChange={value =>
              handleCardNumberChange(
                key as keyof typeof cardNumberValues,
                value,
              )
            }
            isError={!!errorMessages[key as keyof ErrorMessagesType]}
            onComplete={() => {}}
            name={`cardNumber-${key}`}
          />
        ))}
      </InputGroup>
    </>
  );
};
