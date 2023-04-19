import React, { useEffect, useRef, useState } from 'react';
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
}

const HYPHEN = styled.span``;

export function CardNumberInput({
  moveFocusToExpirationDate,
  cardNumber,
  setCardNumber,
}: Props) {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);
  const thirdInputRef = useRef<HTMLInputElement>(null);
  const fourthInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const [maxLengthReached, setMaxLengthReached] = useState([
    false,
    false,
    false,
  ]);

  return (
    <>
      <Style.Label>
        <Style.Title>카드 번호</Style.Title>
      </Style.Label>
      <InputWrapper width={318}>
        <Input
          value={cardNumber[0]}
          width={'36'}
          minLength={4}
          maxLength={4}
          required
          inputMode="numeric"
          ref={firstInputRef}
          tabIndex={0}
          onChange={(e) => {
            setCardNumber({
              ...cardNumber,
              0: e.target.value,
            });
            if (e.target.value.length === 4) {
              setMaxLengthReached((current) => [true, ...current.slice(0, -1)]);
              secondInputRef.current?.focus();
            }
          }}
          placeholder="0000"
        />
        <HYPHEN
          style={{ visibility: maxLengthReached[0] ? 'visible' : 'hidden' }}
        >
          &nbsp;-&nbsp;
        </HYPHEN>
        <Input
          value={cardNumber[1]}
          width={'36'}
          minLength={4}
          maxLength={4}
          required
          inputMode="numeric"
          ref={secondInputRef}
          tabIndex={1}
          onChange={(e) => {
            setCardNumber({
              ...cardNumber,
              1: e.target.value,
            });
            if (e.target.value.length === 4) {
              setMaxLengthReached((current) => [true, ...current.slice(0, -1)]);
              thirdInputRef.current?.focus();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Backspace' && cardNumber[1] === '') {
              e.preventDefault();
              setMaxLengthReached((current) => [...current.slice(1), false]);
              firstInputRef.current?.focus();
            }
          }}
          placeholder="0000"
        />
        <HYPHEN
          style={{ visibility: maxLengthReached[1] ? 'visible' : 'hidden' }}
        >
          &nbsp;-&nbsp;
        </HYPHEN>
        <Input
          value={cardNumber[2]}
          width={'36'}
          minLength={4}
          maxLength={4}
          type="password"
          required
          inputMode="numeric"
          ref={thirdInputRef}
          tabIndex={2}
          onChange={(e) => {
            setCardNumber({
              ...cardNumber,
              2: e.target.value,
            });
            if (e.target.value.length === 4) {
              setMaxLengthReached((current) => [true, ...current.slice(0, -1)]);
              fourthInputRef.current?.focus();
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'Backspace' && cardNumber[2] === '') {
              e.preventDefault();
              setMaxLengthReached((current) => [...current.slice(1), false]);
              secondInputRef.current?.focus();
            }
          }}
          placeholder="••••"
        />
        <HYPHEN
          style={{ visibility: maxLengthReached[2] ? 'visible' : 'hidden' }}
        >
          &nbsp;-&nbsp;
        </HYPHEN>
        <Input
          value={cardNumber[3]}
          width={'36'}
          minLength={4}
          maxLength={4}
          type="password"
          required
          inputMode="numeric"
          ref={fourthInputRef}
          tabIndex={3}
          onChange={(e) => {
            setCardNumber({
              ...cardNumber,
              3: e.target.value,
            });
            if (e.target.value.length === 4) moveFocusToExpirationDate();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Backspace' && cardNumber[3] === '') {
              e.preventDefault();
              setMaxLengthReached((current) => [...current.slice(1), false]);
              thirdInputRef.current?.focus();
            }
          }}
          placeholder="••••"
          onBlur={() => {
            Object.values(cardNumber).forEach((number) => {
              if (!validator(number)) {
                setCardNumber({
                  0: '',
                  1: '',
                  2: '',
                  3: '',
                });
                alert('유효하지 않은 카드 번호입니다.');

                firstInputRef.current?.focus();
              }
            });
          }}
        />
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
