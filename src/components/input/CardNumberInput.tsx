import React, { useEffect, useRef } from 'react';
import { InputWrapper } from './InputWrapper';
import { Input } from './Input';
import styled from 'styled-components';

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
  lastCardNumberInputRef: React.RefObject<HTMLInputElement>;
}

const HYPHEN = styled.span``;

export function CardNumberInput({
  moveFocusToExpirationDate,
  cardNumber,
  setCardNumber,
  lastCardNumberInputRef,
}: Props) {
  const allRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    lastCardNumberInputRef,
  ];

  useEffect(() => {
    allRefs[0].current?.click();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.dataset.index);

    setCardNumber({
      ...cardNumber,
      [index]: e.target.value,
    });

    if (e.target.value.length === 4) {
      if (index !== 3) allRefs[index + 1].current?.focus();
      if (index === 3) moveFocusToExpirationDate();
    }

    if (!validator(e.target.value)) {
      setCardNumber({
        ...cardNumber,
        [index]: '',
      });
      alert('유효하지 않은 카드 번호입니다.');

      allRefs[index].current?.focus();
    }
  };

  const handlePressBackspace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!(e.target instanceof HTMLInputElement)) return;

    const index = Number(e.target.dataset.index);

    if (
      e.key === 'Backspace' &&
      cardNumber[index as keyof typeof cardNumber] === '' &&
      index !== 0
    ) {
      e.preventDefault();
      allRefs[index - 1].current?.focus();
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
                value={cardNumber[index as keyof typeof cardNumber]}
                width={'36'}
                minLength={4}
                maxLength={4}
                required
                inputMode="numeric"
                autoFocus={index === 0 ? true : false}
                type={index > 1 ? 'password' : 'text'}
                ref={allRefs[index]}
                data-index={index}
                onChange={handleInputChange}
                onKeyDown={handlePressBackspace}
                placeholder={index < 2 ? '0000' : '••••'}
              />
              {index < 3 && (
                <HYPHEN
                  style={{
                    visibility:
                      cardNumber[index as keyof typeof cardNumber].length === 4
                        ? 'visible'
                        : 'hidden',
                  }}
                >
                  &nbsp;-&nbsp;
                </HYPHEN>
              )}
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
    width: 318px;

    display: flex;
    justify-content: space-between;

    font-size: 12px;
  `,
  Title: styled.span`
    color: #2f2f2f;
  `,
};
