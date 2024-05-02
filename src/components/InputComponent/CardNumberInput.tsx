// import styled from "styled-components";
import Input from './Input';
import FieldTitle from '../FieldTitle';
import React, { useEffect, useRef } from 'react';
import Validation from '../../domain/InputValidation';
import InputField from './InputField';
import { CardNumbers } from '../../types/card';
import { CARD_NUMBER } from '../../constants/system';

interface Props {
  cardNumbers: CardNumbers;
  handleInput: {
    handleUpdateCardNumberInput: (index: number, value: string) => void;
    handleUpdateCardNumberErrorMessages: (
      index: number,
      errorMessage: string,
      isError: boolean
    ) => void;
  };
}
export default function CardNumberInput({
  cardNumbers,
  handleInput: {
    handleUpdateCardNumberInput,
    handleUpdateCardNumberErrorMessages,
  },
}: Props) {
  const inputRefs = useRef<null[] | HTMLInputElement[]>([]);
  const errorMessages = Object.values(cardNumbers.cardNumberFields).map(
    (value) => value.errorMessage
  );

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    info: string,
    index: number
  ) => {
    try {
      Validation[info]?.(e.target.value);
      handleUpdateCardNumberErrorMessages(index, '', false);
      handleUpdateCardNumberInput(index, e.target.value);
      const nextIndex = index + 1;
      if (
        e.target.value.length === CARD_NUMBER.FIELD_LENGTH &&
        nextIndex < inputRefs.current.length
      ) {
        inputRefs.current[nextIndex]?.focus();
      }
            
      if (e.target.value.length !== CARD_NUMBER.FIELD_LENGTH) {
        throw new Error('4자리의 숫자를 입력해주세요');
      }
    } catch (error) {
      if (error instanceof Error) {
        handleUpdateCardNumberErrorMessages(index, error.message, true);
      }
    }
  };

  type CardKeys = 'cardNumber1' | 'cardNumber2' | 'cardNumber3' | 'cardNumber4';

  const getCardKey = (index: number): CardKeys => {
    switch (index) {
      case 0:
        return 'cardNumber1';
      case 1:
        return 'cardNumber2';
      case 2:
        return 'cardNumber3';
      default:
        return 'cardNumber4';
    }
  };

  const checkInputError = (index: number) => {
    const cardKey = getCardKey(index);
    return cardNumbers.cardNumberFields[cardKey].isError;
  };

  return (
    <>
      <FieldTitle
        title='결제할 카드 번호를 입력해 주세요'
        subtitle='본인 명의의 카드만 결제 가능합니다.'
      />
      <InputField
        label='카드 번호'
        count={4}
        errorMessages={errorMessages}
      >
        {Array.from({ length: CARD_NUMBER.TOTAL_FIELDS }).map((_, index) => {
          return (
            <Input
              key={index}
              type='text'
              value={cardNumbers.cardNumberFields[getCardKey(index)].value}
              maxLength={CARD_NUMBER.FIELD_LENGTH}
              placeholder='1234'
              isError={checkInputError(index)}
              onChange={(e) => handleInputChange(e, 'cardNumber', index)}
              inputRef={(element: HTMLInputElement) => {
                inputRefs.current[index] = element;
              }}
            />
          );
        })}
      </InputField>
    </>
  );
}
