import { useRef } from 'react';
import styled from 'styled-components';
import { useFocusChain } from '../hooks/useFocusChain';
import type { Month, Year } from '../types/CreditCard';
import { NumberInput } from './common/NumberInput';

const StyledExpirationDateInput = styled.div`
  display: flex;
  gap: 8px;
`;

type ExpirationDateInputProps = {
  value: [Month, Year];
  onChange: (value: [Month, Year]) => void;
};

export const ExpirationDateInput = (props: ExpirationDateInputProps) => {
  const {
    value: [month, year],
    onChange,
  } = props;

  const monthRef = useRef<HTMLInputElement>(null);
  const yearRef = useRef<HTMLInputElement>(null);

  const { next } = useFocusChain([monthRef, yearRef]);

  const handleMonthChange = (value: string) => {
    if (value.length === 2) next();

    onChange([value, year]);
  };

  const handleYearChange = (value: string) => {
    if (!/^\d{0,2}$/.test(value)) return;

    onChange([month, value]);
  };

  return (
    <StyledExpirationDateInput>
      <NumberInput
        ref={monthRef}
        maxCount={2}
        value={month}
        handleOnChange={handleMonthChange}
        center
        placeholder="MM"
        width={6}
      />
      <NumberInput
        ref={yearRef}
        maxCount={2}
        value={year}
        handleOnChange={handleYearChange}
        center
        placeholder="YY"
        width={6}
      />
    </StyledExpirationDateInput>
  );
};
