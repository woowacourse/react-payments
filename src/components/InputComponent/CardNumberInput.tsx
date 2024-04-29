// import styled from "styled-components";
import Input from './Input';
import FieldTitle from '../FieldTitle';
import React, { useEffect, useRef } from 'react';
import Validation from '../../domain/InputValidation';
import InputField from './InputField';
import { CardNumbers } from '../../types/card';

interface Props {
  cardNumbers: CardNumbers;
  handleInput: {
    updateCardNumberIsNextField : () => void
  handleUpdateCardNumberInput:  (index: number, value: string) => void
  handleUpdateCardNumberErrorMessages : (index: number, errorMessage: string, isError: boolean) => void;
  }
}
export default function CardNumberInput({
  cardNumbers,
  handleInput: {updateCardNumberIsNextField, handleUpdateCardNumberInput, handleUpdateCardNumberErrorMessages},
}: Props) {
  const inputRefs = useRef<null[] | HTMLInputElement[]>([]);
  const errorMessages = Object.values(cardNumbers.cardNumberFields).map(
    (value) => value.errorMessage
  );

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  // useEffect(() => {
  //   const checkCompleteInput = () => {
  //     const isNotAllError = Object.values(cardNumbers.cardNumberFields).reduce((pre, cur) => {
  //       if (!cur.isError && cur.value !== '' && cur.value.length === 4) {
  //         return pre + 1;
  //       }
  //       return pre;
  //     }, 0);
  //     return isNotAllError === 4;
  //   };
  //   if (checkCompleteInput()) {
  //     handleInput((prev) => ({
  //       ...prev,
  //       isNextField : true
  //     }));
  //   }
  // }, [cardNumbers.cardNumberFields, handleInput]);

  // const handleUpdateInput = (index: number, value: string) => {
  //   const cardKey =
  //     `cardNumber${index + 1}` as keyof typeof cardNumbers.cardNumberFields;
  //   handleInput((prevState: CardNumbers) => {
  //     return {
  //       ...prevState,
  //       cardNumberFields: {
  //         ...prevState.cardNumberFields,
  //         [cardKey]: {
  //           ...prevState.cardNumberFields[cardKey],
  //           value: value,
  //         },
  //       },
  //     };
  //   });
  // };

  // const handleUpdateErrorMessages = (
  //   index: number,
  //   errorMessage: string,
  //   isError: boolean
  // ) => {
  //   const cardKey =
  //     `cardNumber${index + 1}` as keyof typeof cardNumbers.cardNumberFields;
  //   handleInput((prevState: CardNumbers) => {
  //     return {
  //       ...prevState,
  //       cardNumberFields: {
  //         ...prevState.cardNumberFields,
  //         [cardKey]: {
  //           ...prevState.cardNumberFields[cardKey],
  //           errorMessage: errorMessage,
  //           isError: isError,
  //         },
  //       },
  //     };
  //   });
  // };

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
      if (e.target.value.length === 4 && nextIndex < inputRefs.current.length) {
        inputRefs.current[nextIndex]?.focus();
      }
      updateCardNumberIsNextField()
    } catch (error) {
      if (error instanceof Error) {
        handleUpdateCardNumberErrorMessages(index, error.message, true);
      }
    }
  };

  const checkInputError = (index: number) => {
    const cardKey =
      `cardNumber${index + 1}` as keyof typeof cardNumbers.cardNumberFields;
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
        {Array.from({ length: 4 }).map((_, index) => (
          <Input
            key={index}
            type='text'
            value={
              cardNumbers.cardNumberFields[
                `cardNumber${index + 1}` as keyof typeof cardNumbers.cardNumberFields
              ].value
            }
            maxLength={4}
            placeholder='1234'
            isError={checkInputError(index)}
            onChange={(e) => handleInputChange(e, 'cardNumber', index)}
            inputRef={(element: HTMLInputElement) => {
              inputRefs.current[index] = element;
            }}
          />
        ))}
      </InputField>
    </>
  );
}
