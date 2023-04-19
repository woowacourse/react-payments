import React, { useEffect, useRef, useState } from 'react';
import { InputWrapper } from './InputWrapper';
import { Input } from './Input';
import styled from 'styled-components';

const HYPHEN = styled.span``;

export function CardNumberInput() {
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

  const allRef = [firstInputRef, secondInputRef, thirdInputRef, fourthInputRef];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { maxLength, value, tabIndex } = e.target;

    if (!validater(value)) {
      alert('유효하지 않은 입력값입니다!');
      e.target.value = value.replace(/[^0-9]/g, '');
      return;
    }

    const canFocusNext =
      tabIndex !== allRef.length - 1 && value.length === maxLength;
    const canFocusPrev = tabIndex !== 0 && value.length === 0;

    if (canFocusNext) {
      setMaxLengthReached((current) => [true, ...current.slice(0, -1)]);
      allRef[tabIndex + 1].current?.focus();
    }
    if (canFocusPrev) {
      setMaxLengthReached((current) => [...current.slice(1), false]);
      allRef[tabIndex - 1].current?.focus();
    }
  };

  return (
    <>
      <InputWrapper width={318}>
        <Input
          width={'36'}
          minLength={4}
          maxLength={4}
          required
          inputMode="numeric"
          ref={firstInputRef}
          tabIndex={0}
          onChange={handleInputChange}
        />
        <HYPHEN
          style={{ visibility: maxLengthReached[0] ? 'visible' : 'hidden' }}
        >
          &nbsp;-&nbsp;
        </HYPHEN>
        <Input
          width={'36'}
          minLength={4}
          maxLength={4}
          required
          inputMode="numeric"
          ref={secondInputRef}
          tabIndex={1}
          onChange={handleInputChange}
        />
        <HYPHEN
          style={{ visibility: maxLengthReached[1] ? 'visible' : 'hidden' }}
        >
          &nbsp;-&nbsp;
        </HYPHEN>
        <Input
          width={'36'}
          minLength={4}
          maxLength={4}
          type="password"
          required
          inputMode="numeric"
          ref={thirdInputRef}
          tabIndex={2}
          onChange={handleInputChange}
        />
        <HYPHEN
          style={{ visibility: maxLengthReached[2] ? 'visible' : 'hidden' }}
        >
          &nbsp;-&nbsp;
        </HYPHEN>
        <Input
          width={'36'}
          minLength={4}
          maxLength={4}
          type="password"
          required
          inputMode="numeric"
          ref={fourthInputRef}
          tabIndex={3}
          onChange={handleInputChange}
        />
      </InputWrapper>
      {}
    </>
  );
}

function validater(input: string) {
  return /^[0-9]+$/.test(input);
}
