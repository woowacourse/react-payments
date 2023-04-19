import { useState } from 'react';
import styled from 'styled-components';
import { Input } from './common/Input';

const StyledExpirationDateInput = styled.div`
  display: flex;
  gap: 8px;
`;

export const ExpirationDateInput = () => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleMonthChange = (value: string) => {
    if (!/^((0?[1-9]?)|(1?[0-2]?))$/.test(value)) return;

    setMonth(value);
  };

  const handleYearChange = (value: string) => {
    if (!/^\d{0,2}$/.test(value)) return;

    setYear(value);
  };

  return (
    <StyledExpirationDateInput>
      <Input value={month} onChange={handleMonthChange} center placeholder="MM" width={6} />
      <Input value={year} onChange={handleYearChange} center placeholder="YY" width={6} />
    </StyledExpirationDateInput>
  );
};
