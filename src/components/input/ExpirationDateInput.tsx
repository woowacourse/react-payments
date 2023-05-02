import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { InputContainer } from './InputContainer';
import { isEmptyInput, isFullInput } from '../../utils';
import { isNumeric, isValidDate, isValidMonth } from '../../utils/validator';
import { ERROR, MONTH_SIZE, YEAR_SIZE } from '../../constants';
import { ExpirationDate } from '../../types';

interface Props {
  monthInputRef: React.RefObject<HTMLInputElement>;
  expirationDate: ExpirationDate;
  setExpirationDate: (input: ExpirationDate) => void;
  moveFocusToOwnerName?: () => void;
}

export function ExpirationDateInput({
  monthInputRef,
  expirationDate,
  setExpirationDate,
  moveFocusToOwnerName,
}: Props) {
  const yearInputRef = useRef<HTMLInputElement>(null);
  const [expirationDateError, setExpirationDateError] = useState('');

  const handleBackspacePress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && isEmptyInput(expirationDate.year)) {
      e.preventDefault();
      monthInputRef.current?.focus();
    }
  };

  const handleMonthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate({
      ...expirationDate,
      month: e.target.value,
    });

    if (!isNumeric(e.target.value)) {
      setExpirationDateError(ERROR.IS_NOT_NUMBER);
      return;
    }

    if (!isValidMonth(e.target.value)) {
      setExpirationDateError(ERROR.INVALID_MONTH);
      return;
    }

    setExpirationDateError('');

    const month = e.target.value;
    if (isFullInput(month, MONTH_SIZE)) yearInputRef.current?.focus();
  };

  const handleYearInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpirationDate({
      ...expirationDate,
      year: e.target.value,
    });

    if (!isNumeric(e.target.value)) {
      setExpirationDateError(ERROR.IS_NOT_NUMBER);
      return;
    }

    if (!isValidDate(expirationDate.month, e.target.value)) {
      setExpirationDateError(ERROR.INVALID_EXPIRATION_DATE);
      return;
    }

    setExpirationDateError('');
  };

  const updateExpirationDateError = (e: React.FocusEvent<HTMLElement>) => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    if (!(e.target instanceof HTMLInputElement)) return;

    if (!isValidDate(expirationDate.month, expirationDate.year)) {
      setExpirationDateError(ERROR.INVALID_EXPIRATION_DATE);
      return;
    }

    setExpirationDateError('');
  };

  useEffect(() => {
    if (
      isFullInput(expirationDate.year, YEAR_SIZE) &&
      isValidDate(expirationDate.month, expirationDate.year) &&
      moveFocusToOwnerName
    )
      moveFocusToOwnerName();
  }, [expirationDate.year]);

  return (
    <Style.Container onBlur={updateExpirationDateError}>
      <Style.Label htmlFor='expirationDate'>
        <Style.Title>
          만료일<Style.Essential>*</Style.Essential>
        </Style.Title>
      </Style.Label>
      <InputContainer width={'137px'}>
        <Input
          id='expirationDate'
          ref={monthInputRef}
          value={expirationDate.month}
          width={'30px'}
          minLength={MONTH_SIZE}
          maxLength={MONTH_SIZE}
          required
          inputMode='numeric'
          placeholder='MM'
          onChange={handleMonthInputChange}
          aria-labelledby='ExpirationDateCaption'
        />
        <Style.Slash>/</Style.Slash>
        <Input
          ref={yearInputRef}
          value={expirationDate.year}
          width={'30px'}
          minLength={YEAR_SIZE}
          maxLength={YEAR_SIZE}
          required
          inputMode='numeric'
          placeholder='YY'
          onChange={handleYearInputChange}
          onKeyDown={handleBackspacePress}
        />
      </InputContainer>
      <Style.Caption id='ExpirationDateCaption' aria-live='assertive'>
        {expirationDateError}
      </Style.Caption>
    </Style.Container>
  );
}

const Style = {
  Container: styled.fieldset`
    border: none;
  `,

  Label: styled.label`
    display: flex;
    justify-content: space-between;

    width: 318px;
    margin-bottom: 10px;

    font-size: 12px;
  `,

  Title: styled.span`
    color: #2f2f2f;
  `,

  Essential: styled.span`
    color: red;
  `,

  Slash: styled.span`
    padding: 0 5px;
  `,

  Caption: styled.p`
    height: 8px;
    margin-top: 8px;

    font-size: 10px;
    color: #db5959;
  `,
};
