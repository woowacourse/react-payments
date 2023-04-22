import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { InputWrapper } from './InputWrapper';

interface Props {
  moveFocusToExpirationDate: () => void;
  cardNumber: {
    0: string;
    1: string;
    2: string;
    3: string;
  };
  setCardNumber: React.Dispatch<
    React.SetStateAction<{
      0: string;
      1: string;
      2: string;
      3: string;
    }>
  >;
}

export function CardNumberInput({ moveFocusToExpirationDate, cardNumber, setCardNumber }: Props) {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);

  const allRef = [firstInputRef, secondInputRef, thirdInputRef, fourthInputRef];
  const [maxLengthReached, setMaxLengthReached] = useState([false, false, false]);

  const handleBackspacePress = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      e.key === 'Backspace' &&
      cardNumber[index as keyof typeof cardNumber] === '' &&
      index !== 0
    ) {
      e.preventDefault();
      setMaxLengthReached((current) => [...current.slice(1), false]);
      allRef[index - 1].current?.focus();
    }
  };

  const handleCardNumberInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber({
      ...cardNumber,
      [index]: e.target.value,
    });
    if (e.target.value.length === 4) {
      setMaxLengthReached((current) => [true, ...current.slice(0, -1)]);
      if (index !== 3) allRef[index + 1].current?.focus();
      if (index === 3) moveFocusToExpirationDate();
    }
  };

  const handleLastInputBlur = (index: number) => {
    if (index === 3) {
      if (!validator(Object.values(cardNumber).join(''))) {
        setCardNumber({
          0: '',
          1: '',
          2: '',
          3: '',
        });
        alert('유효하지 않은 카드 번호입니다.');

        firstInputRef.current?.focus();
      }
    }
  };

  useEffect(() => {
    firstInputRef.current?.click();
  }, []);

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
                value={cardNumber[index as keyof typeof cardNumber]}
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
                onBlur={() => handleLastInputBlur(index)}
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

const validator = (input: string) => {
  return /^[0-9]+$|^$/.test(input);
};

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
