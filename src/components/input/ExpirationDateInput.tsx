import styled from 'styled-components';
import { useRef, useEffect } from 'react';
import { Input } from './Input';
import { InputWrapper } from './InputWrapper';
import { ExpirationDate } from '../../types';
import { isValidDate } from '../../validator';

interface Props {
  monthInputRef: React.RefObject<HTMLInputElement>;
  expirationDate: ExpirationDate;
  setExpirationDate: React.Dispatch<React.SetStateAction<ExpirationDate>>;
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
      <Style.Label htmlFor='expirationDate'>
        <Style.Title>만료일</Style.Title>
      </Style.Label>
      <InputWrapper width={137}>
        <Input
          id='expirationDate'
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

const Style = {
  Label: styled.label`
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
