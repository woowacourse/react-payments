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

  const allRef = [firstInputRef, secondInputRef, thirdInputRef, fourthInputRef];

  useEffect(() => {
    firstInputRef.current?.click();
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
                ref={allRef[index]}
                onChange={(e) => {
                  setCardNumber({
                    ...cardNumber,
                    [index]: e.target.value,
                  });
                  if (e.target.value.length === 4) {
                    setMaxLengthReached((current) => [
                      true,
                      ...current.slice(0, -1),
                    ]);
                    if (index !== 3) allRef[index + 1].current?.focus();
                    if (index === 3) moveFocusToExpirationDate();
                  }
                }}
                onKeyDown={(e) => {
                  if (
                    e.key === 'Backspace' &&
                    cardNumber[index as keyof typeof cardNumber] === '' &&
                    index !== 0
                  ) {
                    e.preventDefault();
                    setMaxLengthReached((current) => [
                      ...current.slice(1),
                      false,
                    ]);
                    allRef[index - 1].current?.focus();
                  }
                }}
                onBlur={() => {
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
                }}
                placeholder={index < 2 ? '0000' : '••••'}
              />
              {index !== 3 && (
                <HYPHEN
                  style={{
                    visibility: maxLengthReached[index] ? 'visible' : 'hidden',
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
