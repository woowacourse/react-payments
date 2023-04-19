import { useRef, useState } from 'react';
import { InputWrapper } from './InputWrapper';
import { Input } from './Input';

export function ExpirationDateInput() {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const monthInputRef = useRef<HTMLInputElement>(null);
  const yearInputRef = useRef<HTMLInputElement>(null);

  const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && year === '') {
      e.preventDefault();
      monthInputRef.current?.focus();
    }
  };

  const validateDate = () => {
    if (!isValidDate(month, year)) {
      alert('유효한 날짜가 아닙니다.');

      setMonth('');
      setYear('');

      monthInputRef.current?.focus();
    }
  };

  return (
    <InputWrapper width={137}>
      <Input
        ref={monthInputRef}
        value={month}
        width={'30'}
        minLength={2}
        maxLength={2}
        required
        inputMode="numeric"
        placeholder="MM"
        onChange={(e) => {
          setMonth(e.target.value);

          if (e.target.value.length === 2) yearInputRef.current?.focus();
        }}
      />
      &nbsp;/&nbsp;
      <Input
        ref={yearInputRef}
        value={year}
        width={'30'}
        minLength={2}
        maxLength={2}
        required
        inputMode="numeric"
        placeholder="YY"
        onChange={(e) => {
          setYear(e.target.value);
        }}
        onKeyDown={handleBackspacePress}
        onBlur={validateDate}
      />
    </InputWrapper>
  );
}

const isValidMonth = (input: string) => {
  return Number(input) >= 1 && Number(input) <= 12;
};

const isValidYear = (input: string) => {
  return /^[0-9]{2}$|^$/.test(input);
};

const isValidDate = (month: string, year: string) => {
  if (!isValidMonth(month)) return false;
  if (!isValidYear(year)) return false;

  const currentDate = new Date();
  const currentMonth = String(currentDate.getMonth() + 1);
  const currentYear = String(currentDate.getFullYear()).slice(2);

  if (Number(year) > Number(currentYear)) return true;

  return Number(year) === Number(currentYear)
    ? Number(month) >= Number(currentMonth)
    : false;
};
