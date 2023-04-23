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
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);

  const allRef = [firstInputRef, secondInputRef, thirdInputRef, fourthInputRef];
  const [maxLengthReached, setMaxLengthReached] = useState([false, false, false]);

  const handleBackspacePress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && cardNumber[index] === '' && index !== 0) {
      e.preventDefault();
      setMaxLengthReached((prev) => [...prev.slice(1), false]);
      allRef[index - 1].current?.focus();
    }
  };

  const handleCardNumberInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber((prev) => {
      const currentCardNumber = [...prev];
      currentCardNumber[index] = e.target.value;
      return currentCardNumber;
    });

    if (e.target.value.length === 4) {
      setMaxLengthReached((prev) => [true, ...prev.slice(0, -1)]);

      const isLastInput = index === cardNumber.length - 1;

      if (!isLastInput) allRef[index + 1].current?.focus();
      if (isLastInput) moveFocusToExpirationDate();
    }
  };

  const handleLastInputBlur = (index: number, e: React.FocusEvent<HTMLInputElement>) => {
    if (index < cardNumber.length - 1) return;

    const inputs = [...cardNumber.slice(0, -1), e.target.value].join('');
    const isValidCardNumber = isNumeric(inputs) && hasValidLength(inputs, 16);

    if (!isValidCardNumber) {
      setCardNumber(['', '', '', '']);
      alert('유효하지 않은 카드 번호입니다.');

      firstInputRef.current?.focus();
    }
  };

  return (
    <>
      <Style.Label>
        <Style.Title>카드 번호</Style.Title>
      </Style.Label>
      <InputWrapper width={318}>
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <>
              <Input
                value={cardNumber[index]}
                width={36}
                minLength={4}
                maxLength={4}
                required
                inputMode='numeric'
                autoFocus={index === 0 ? true : false}
                type={index > 1 ? 'password' : 'text'}
                ref={allRef[index]}
                onChange={(e) => handleCardNumberInputChange(index, e)}
                onKeyDown={(e) => handleBackspacePress(index, e)}
                onBlur={(e) => handleLastInputBlur(index, e)}
                placeholder={index < 2 ? '0000' : '••••'}
              />
              {index !== 3 && <Style.Hyphen isVisible={maxLengthReached[index]}>-</Style.Hyphen>}
            </>
          );
        })}
      </InputWrapper>
    </>
  );
}

const Style = {
  Label: styled.div`
    display: flex;
    justify-content: space-between;

    width: 318px;

    font-size: 12px;
  `,

  Title: styled.span`
    color: #2f2f2f;
  `,

  Hyphen: styled.span<{ isVisible: boolean }>`
    padding: 0 10px;
    visibility: ${(props) => (props.isVisible ? 'visible' : 'hidden')};
  `,
};
