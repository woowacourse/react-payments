import { PaymentsInput } from 'components/common';
import { PaymentsInputLabel } from 'components/common/Label/PaymentsInputLabel';
import React, { ChangeEvent, useRef } from 'react';
import styled, { CSSProperties } from 'styled-components';
import { isNumber } from 'utils';
import { ValueAndOnChange } from './types';

export interface ExpirationProps {
  month: ValueAndOnChange;
  year: ValueAndOnChange;
  width?: CSSProperties['width'];
}

export function ExpirationDateInput(props: ExpirationProps) {
  const { month, year, width } = props;
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
      <PaymentsInputLabel required>만료일</PaymentsInputLabel>
      <Container>
        <PaymentsInput
          ref={(element) => (inputRefs.current[0] = element)}
          value={month.value}
          type="text"
          maxLength={2}
          placeholder="MM"
          onChange={(e) => handleChange(e, 0, month.onChange)}
          inputMode="numeric"
          width={width}
          align="center"
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
          width={width}
          align="center"
          required
        />
      </Container>
    </>
  );
}

const SLASH = styled.span`
  margin: 0 3px;
  &::before {
    content: '/';
  }
`;

const Container = styled.div`
  margin-top: 3px;
  display: flex;
  align-items: center;
  width: 100%;
`;
