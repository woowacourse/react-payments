import { useRef } from 'react';
import styled from 'styled-components';
import { Input } from './Input';
import { InputContainer } from './InputContainer';
import { useExpirationDateInput } from '../../hooks/input/useExpirationDateInput';
import { MONTH_SIZE, YEAR_SIZE } from '../../constants';
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
  const {
    expirationDateError,
    updateExpirationDateError,
    handleBackspacePress,
    handleMonthInputChange,
    handleYearInputChange,
  } = useExpirationDateInput({
    expirationDate,
    monthInputRef,
    yearInputRef,
    setExpirationDate,
    moveFocusToOwnerName,
  });

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
