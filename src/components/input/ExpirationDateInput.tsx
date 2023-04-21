import { useEffect } from 'react';
import { InputWrapper } from './InputWrapper';
import { Input } from './Input';
import styled from 'styled-components';

interface Props {
  monthInputRef: React.RefObject<HTMLInputElement>;
  yearInputRef: React.RefObject<HTMLInputElement>;
  moveFocusToOwnerName: () => void;
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
  moveFocusToLastCardNumberInput: () => void;
}

export function ExpirationDateInput({
  monthInputRef,
  yearInputRef,
  moveFocusToOwnerName,
  expirationDate,
  setExpirationDate,
  moveFocusToLastCardNumberInput,
}: Props) {
  useEffect(() => {
    if (expirationDate.year.length === 2) moveFocusToOwnerName();
    //
  }, [expirationDate.year]);

  const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Backspace') return;
    if (!(e.target instanceof HTMLInputElement)) return;

    e.preventDefault();

    if (e.target.dataset.inputTarget === 'year' && expirationDate.year === '') {
      monthInputRef.current?.focus();
      return;
    }
    if (
      e.target.dataset.inputTarget === 'month' &&
      expirationDate.month === ''
    ) {
      moveFocusToLastCardNumberInput();
    }
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

  return (
    <>
      <Style.Label>
        <Style.Title>만료일</Style.Title>
      </Style.Label>
      <InputWrapper width={137}>
        <Input
          ref={monthInputRef}
          value={expirationDate.month}
          data-input-target={'month'}
          width={'30'}
          minLength={2}
          maxLength={2}
          required
          inputMode="numeric"
          placeholder="MM"
          onChange={(e) => {
            setExpirationDate({
              ...expirationDate,
              month: e.target.value,
            });

            if (e.target.value.length === 2) yearInputRef.current?.focus();
          }}
          onKeyDown={handleBackspacePress}
        />
        &nbsp;/&nbsp;
        <Input
          ref={yearInputRef}
          value={expirationDate.year}
          data-input-target={'year'}
          width={'30'}
          minLength={2}
          maxLength={2}
          required
          inputMode="numeric"
          placeholder="YY"
          onChange={(e) => {
            setExpirationDate({
              ...expirationDate,
              year: e.target.value,
            });
          }}
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

  return Number(year) === Number(currentYear)
    ? Number(month) >= Number(currentMonth)
    : false;
};

const Style = {
  Label: styled.div`
    width: 318px;

    display: flex;
    justify-content: space-between;

    font-size: 12px;
  `,
  Title: styled.span`
    color: #2f2f2f;
  `,
};
