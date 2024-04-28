// import styled from "styled-components";
import Input from './Input';
import FieldTitle from '../FieldTitle';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import Validation from '../../domain/InputValidation';
import InputField from './InputField';
import { CardNumbers } from '../../types/card';
import { ShowComponents } from '../../types/showComponents';

interface Props {
  cardNumbers: CardNumbers;
  handleInput: Dispatch<SetStateAction<CardNumbers>>;
  handleShowComponent: Dispatch<SetStateAction<ShowComponents>>;
}
export default function CardNumberInput({
  cardNumbers,
  handleInput,
  handleShowComponent,
}: Props) {
  const inputRefs = useRef<null[] | HTMLInputElement[]>([]);
  const errorMessages = Object.values(cardNumbers).map(
    (value) => value.errorMessage
  );

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    const checkCompleteInput = () => {
      const isNotAllError = Object.values(cardNumbers).reduce((pre, cur) => {
        if (!cur.isError && cur.value !== '' && cur.value.length === 4) {
          return pre + 1;
        }
        return pre;
      }, 0);
      return isNotAllError === 4;
    };
    if (checkCompleteInput()) {
      handleShowComponent((prev) => ({
        ...prev,
        cardDropDown: true,
      }));
    }
  }, [cardNumbers, handleShowComponent]);

  const handleUpdateInput = (index: number, value: string) => {
    const cardKey = `cardNumber${index + 1}` as keyof CardNumbers;
    handleInput((prevState: CardNumbers) => {
      return {
        ...prevState,
        [cardKey]: {
          ...prevState[cardKey],
          value: value,
        },
      };
    });
  };

  const handleUpdateErrorMessages = (
    index: number,
    errorMessage: string,
    isError: boolean
  ) => {
    const cardKey = `cardNumber${index + 1}` as keyof CardNumbers;
    handleInput((prevState: CardNumbers) => {
      return {
        ...prevState,
        [cardKey]: {
          ...prevState[cardKey],
          errorMessage: errorMessage,
          isError: isError,
        },
      };
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    info: string,
    index: number
  ) => {
    try {
      Validation[info]?.(e.target.value);
      handleUpdateErrorMessages(index, '', false);
      handleUpdateInput(index, e.target.value);
      const nextIndex = index + 1;
      if (e.target.value.length === 4 && nextIndex < inputRefs.current.length) {
        inputRefs.current[nextIndex]?.focus();
      }
    } catch (error) {
      if (error instanceof Error) {
        handleUpdateErrorMessages(index, error.message, true);
      }
    }
  };

  const checkInputError = (index: number) => {
    const cardKey = `cardNumber${index + 1}` as keyof CardNumbers;
    return cardNumbers[cardKey].isError;
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
              cardNumbers[`cardNumber${index + 1}` as keyof CardNumbers].value
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
