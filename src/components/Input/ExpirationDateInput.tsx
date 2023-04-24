import { Input } from 'components/common';
import React, { ChangeEventHandler, ChangeEvent } from 'react';
import styled from 'styled-components';
import { ValueAndOnChange } from './types';
import { validateInput } from 'util/Validation';

export interface ExpirationProps {
  month: ValueAndOnChange;
  year: ValueAndOnChange;
}

export function ExpirationDateInput(props: ExpirationProps) {
  const { month, year } = props;
  const inputRefs = Object.keys(props).map(() => React.createRef<HTMLInputElement>());

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    onChange?: ChangeEventHandler<HTMLInputElement>,
  ) => {
    const value = e.target.value;
    if (validateInput(value)) return;

    if (index < Object.keys(props).length - 1 && value.trim().length === e.target.maxLength) {
      inputRefs[index + 1].current?.focus();
    }

    onChange && onChange(e);
  };

  return (
    <>
      <Input
        ref={inputRefs[0]}
        inputMode="numeric"
        value={month.value}
        type="text"
        maxLength={2}
        placeholder="MM"
        onChange={(e) => handleChange(e, 0, month.onChange)}
        required
      />
      <SLASH />
      <Input
        ref={inputRefs[1]}
        inputMode="numeric"
        value={year.value}
        type="text"
        maxLength={2}
        placeholder="YY"
        onChange={(e) => handleChange(e, 1, year.onChange)}
        required
      />
    </>
  );
}

const SLASH = styled.span`
  &::before {
    content: '/';
  }
`;
