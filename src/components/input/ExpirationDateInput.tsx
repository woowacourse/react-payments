import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { Input } from './Input';
import { InputWrapper } from './InputWrapper';

interface Props {
  monthInputRef: React.RefObject<HTMLInputElement>;
  expirationDate: {
    month: string;
    year: string;
  };
  setExpirationDate: React.Dispatch<
    React.SetStateAction<{
      month: string;
      year: string;
    }>
  >;
  moveFocusToOwnerName: () => void;
}

export function ExpirationDateInput({
  monthInputRef,
  expirationDate,
  setExpirationDate,
  moveFocusToOwnerName,
}: Props) {
  const yearInputRef = useRef<HTMLInputElement>(null);

  const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && expirationDate.year === '') {
      e.preventDefault();
      monthInputRef.current?.focus();
    }
  };

  const handleMonthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate({
      ...expirationDate,
      month: e.target.value,
    });

    if (e.target.value.length === 2) yearInputRef.current?.focus();
  };

  const handleYearInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate({
      ...expirationDate,
      year: e.target.value,
    });
  };

  const validateDate = () => {
    if (!isValidDate(expirationDate.month, expirationDate.year)) {
      alert('유효한 날짜가 아닙니다.');

      setExpirationDate({
        month: '',
        year: '',
      });

      monthInputRef.current?.focus();
    }
  };

  useEffect(() => {
    if (expirationDate.year.length === 2) moveFocusToOwnerName();
  }, [expirationDate.year]);

  return (
    <>
      <Style.Label>
        <Style.Title>만료일</Style.Title>
      </Style.Label>
      <InputWrapper width={137}>
        <Input
          ref={monthInputRef}
          value={expirationDate.month}
          width={30}
          minLength={2}
          maxLength={2}
          required
          inputMode='numeric'
          placeholder='MM'
          onChange={handleMonthInputChange}
        />
        <Style.Slash>/</Style.Slash>
        <Input
          ref={yearInputRef}
          value={expirationDate.year}
          width={30}
          minLength={2}
          maxLength={2}
          required
          inputMode='numeric'
          placeholder='YY'
          onChange={handleYearInputChange}
          onKeyDown={handleBackspacePress}
          onBlur={validateDate}
        />
      </InputWrapper>
    </>
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

  return Number(year) === Number(currentYear) ? Number(month) >= Number(currentMonth) : false;
};

const Style = {
  Label: styled.div`
    display: flex;
    justify-content: space-between;

    width: 318px;

    font-size: 12px;
  `,

  Title: styled.span`
    color: #2f2f2f;
  `,

  Slash: styled.span`
    padding: 0 5px;
  `,
};
