import { PaymentsInput } from 'components/common';
import React, { ChangeEvent, useRef } from 'react';
import styled from 'styled-components';
import { isNumber } from 'utils';
import { ValueAndOnChange } from './types';

export interface ExpirationProps {
  month: ValueAndOnChange;
  year: ValueAndOnChange;
}

export function ExpirationDateInput(props: ExpirationProps) {
  const { month, year } = props;
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
    onChange?: ValueAndOnChange['onChange']
  ) => {
    const value = e.target.value;

    if (!isNumber(value)) return;

    if (index < inputRefs.current.length - 1 && value.length === e.target.maxLength) {
      inputRefs.current[index + 1]?.focus();
    }

    onChange?.(value);
  };

  return (
    <>
      <PaymentsInput
        ref={(element) => (inputRefs.current[0] = element)}
        value={month.value}
        type="text"
        maxLength={2}
        placeholder="MM"
        onChange={(e) => handleChange(e, 0, month.onChange)}
        inputMode="numeric"
        required
      />
      <SLASH />
      <PaymentsInput
        ref={(element) => (inputRefs.current[1] = element)}
        value={year.value}
        type="text"
        maxLength={2}
        placeholder="YY"
        onChange={(e) => handleChange(e, 1, year.onChange)}
        inputMode="numeric"
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
