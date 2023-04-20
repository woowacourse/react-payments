import { useRef } from 'react';
import styled from 'styled-components';
import { useFocusChain } from '../hooks/useFocusChain';
import { Input } from './common/Input';

const StyledExpirationDateInput = styled.div`
  display: flex;
  gap: 8px;
`;

type ExpirationDateInputProps = {
  value: [string, string];
  onChange: (value: [string, string]) => void;
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
    if (!/^((0?[1-9]?)|(1?[0-2]?))$/.test(value)) return;

    if (/^\d{2}$/.test(value)) next();

    onChange([value, year]);
  };

  const handleYearChange = (value: string) => {
    if (!/^\d{0,2}$/.test(value)) return;

    onChange([month, value]);
  };

  return (
    <StyledExpirationDateInput>
      <Input
        ref={monthRef}
        value={month}
        onChange={handleMonthChange}
        center
        placeholder="MM"
        width={6}
      />
      <Input
        ref={yearRef}
        value={year}
        onChange={handleYearChange}
        center
        placeholder="YY"
        width={6}
      />
    </StyledExpirationDateInput>
  );
};
