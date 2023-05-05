import { useRef } from 'react';
import styled from 'styled-components';
import { useGroupedFocus } from '../../hooks/useGroupedFocus';
import { NumberInput } from '../common/NumberInput';

const StyledExpirationDateInput = styled.div`
  display: flex;
  gap: 8px;
`;

type ExpirationDateInputProps = {
  value: [string, string];
  onChange?: (value: [string, string]) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

export const ExpirationDateInput = (props: ExpirationDateInputProps) => {
  const {
    value: [month, year],
    onChange,
    onFocus,
    onBlur,
  } = props;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const refs = Array.from({ length: 2 }, () => useRef<HTMLInputElement>(null));
  const [monthRef, yearRef] = refs;
  const { focusNext } = useGroupedFocus(refs, {
    onBlur,
    onFocus,
  });

  const handleMonthChange = (value: string) => {
    if (value.length === 2) focusNext();

    onChange?.([value, year]);
  };

  const handleYearChange = (value: string) => {
    onChange?.([month, value]);
  };

  return (
    <StyledExpirationDateInput>
      <NumberInput
        ref={monthRef}
        maxCount={2}
        value={month}
        onChange={handleMonthChange}
        center
        placeholder="MM"
        width={6}
      />
      <NumberInput
        ref={yearRef}
        maxCount={2}
        value={year}
        onChange={handleYearChange}
        center
        placeholder="YY"
        width={6}
      />
    </StyledExpirationDateInput>
  );
};
