import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import { Input } from './Input';
import { InputWrapper } from './InputWrapper';
import { CardNumber } from '../../types';
import { hasValidLength, isNumeric } from '../../validator';

interface Props {
  cardNumber: CardNumber;
  setCardNumber: React.Dispatch<React.SetStateAction<CardNumber>>;
  moveFocusToExpirationDate: () => void;
}

export function CardNumberInput({ moveFocusToExpirationDate, cardNumber, setCardNumber }: Props) {
  const [isFullInputs, setIsFullInputs] = useState([false, false, false]);
  const allRef = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const CARD_NUMBER_DIGITS = 16;
  const isFirstInput = (index: number) => index === 0;
  const isLastInput = (index: number) => index === cardNumber.length - 1;
  const isEmptyInput = (index: number) => !cardNumber[index].length;
  const isFullInput = (target: string) => {
    return target.length === CARD_NUMBER_DIGITS / cardNumber.length;
  };

  const isPasswordInput = (index: number) => {
    const PASSWORD_START_INDEX = 2;
    return index >= PASSWORD_START_INDEX;
  };

  const handleBackspacePress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && isEmptyInput(index) && !isFirstInput(index)) {
      e.preventDefault();
      setIsFullInputs((prev) => [...prev.slice(1), false]);
      allRef[index - 1].current?.focus();
    }
  };

  const handleCardNumberInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber((prev) => {
      const currentCardNumber = [...prev];
      currentCardNumber[index] = e.target.value;
      return currentCardNumber;
    });

    if (isFullInput(e.target.value)) {
      setIsFullInputs((prev) => [true, ...prev.slice(0, -1)]);

      if (!isLastInput(index)) allRef[index + 1].current?.focus();
      if (isLastInput(index)) moveFocusToExpirationDate();
    }
  };

  const handleLastInputBlur = (index: number, e: React.FocusEvent<HTMLInputElement>) => {
    if (!isLastInput(index)) return;

    const inputs = [...cardNumber.slice(0, -1), e.target.value].join('');
    const isValidCardNumber = isNumeric(inputs) && hasValidLength(inputs, CARD_NUMBER_DIGITS);

    if (!isValidCardNumber) {
      setCardNumber(['', '', '', '']);
      alert('유효하지 않은 카드 번호입니다.');

      allRef[0].current?.focus();
    }
  };

  return (
    <>
      <Style.Label htmlFor='cardNumber0'>
        <Style.Title>카드 번호</Style.Title>
      </Style.Label>
      <InputWrapper width={318}>
        {Array.from({ length: cardNumber.length }).map((_, index) => {
          return (
            <>
              <Input
                id={`cardNumber${index}`}
                value={cardNumber[index]}
                width={36}
                minLength={4}
                maxLength={4}
                required
                inputMode='numeric'
                autoFocus={isFirstInput(index)}
                type={isPasswordInput(index) ? 'password' : 'text'}
                ref={allRef[index]}
                onChange={(e) => handleCardNumberInputChange(index, e)}
                onKeyDown={(e) => handleBackspacePress(index, e)}
                onBlur={(e) => handleLastInputBlur(index, e)}
                placeholder={isPasswordInput(index) ? '••••' : '0000'}
              />
              {!isLastInput(index) && <Style.Hyphen visible={isFullInputs[index]}>-</Style.Hyphen>}
            </>
          );
        })}
      </InputWrapper>
    </>
  );
}

const Style = {
  Label: styled.label`
    display: flex;
    justify-content: space-between;

    width: 318px;

    font-size: 12px;
  `,

  Title: styled.span`
    color: #2f2f2f;
  `,

  Hyphen: styled.span<{ visible: boolean }>`
    padding: 0 10px;
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
  `,
};
