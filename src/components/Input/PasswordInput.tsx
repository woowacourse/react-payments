import { PaymentsInput } from 'components/common';
import React, { ChangeEvent, useRef } from 'react';
import styled from 'styled-components';
import { isNumber } from 'utils';
import { ValueAndOnChange } from './types';

export interface PasswordInputProps {
  first: ValueAndOnChange;
  second: ValueAndOnChange;
}

export function PasswordInput(props: PasswordInputProps) {
  const { first, second } = props;
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
    <Container>
      <PaymentsInput
        ref={(element) => (inputRefs.current[0] = element)}
        value={first.value}
        type="password"
        maxLength={1}
        onChange={(e) => handleChange(e, 0, first.onChange)}
        inputMode="numeric"
        align="center"
        required
      />
      <PaymentsInput
        ref={(element) => (inputRefs.current[1] = element)}
        value={second.value}
        type="password"
        maxLength={1}
        onChange={(e) => handleChange(e, 1, second.onChange)}
        inputMode="numeric"
        align="center"
        required
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 7px;
`;
