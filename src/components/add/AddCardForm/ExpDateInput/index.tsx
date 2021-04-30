/* eslint-disable react/display-name */
import React, { ChangeEvent, FocusEvent, forwardRef, RefObject, useRef } from 'react';
import { EXP_DATE_DIGITS, EXP_DATE_WHITESPACE_CHARACTER } from '../../../../constants/creditCard';
import { LABEL, PLACEHOLDER } from '../../../../constants/addCardForm';
import Input from '../../../shared/Input';
import { ExpDate } from '../../../../types';
import AddCardInputLabel from '../AddCardInputLabel';
import { AddCardInputContainer } from '../styles';
import { isValidExpMonth, isValidExpYear } from '../validator';

interface ExpDateInputProps {
  dateType: 'year' | 'month';
  expDate: ExpDate;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement>, index: keyof ExpDate) => void;
}

const ExpDateInput = React.forwardRef(({ dateType, expDate, onChange, onBlur }: ExpDateInputProps, ref: any) => (
  <Input
    type="text"
    placeholder={PLACEHOLDER[dateType.toUpperCase() as 'MONTH' | 'YEAR']}
    textCenter
    maxLength={EXP_DATE_DIGITS}
    width="40%"
    value={expDate[dateType]}
    onChange={onChange}
    onBlur={event => onBlur(event, dateType)}
    ref={ref}
  />
));

interface ExpDateInputsProps {
  expDate: ExpDate;
  setExpDate: (expDate: ExpDate) => void;
}

const ExpDateInputs = ({ expDate, setExpDate }: ExpDateInputsProps) => {
  const expYearInputRef = useRef<HTMLInputElement>(null);

  const onChangeExpYear = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidExpYear(value)) return;
    setExpDate({ ...expDate, year: value });
  };

  const onChangeExpMonth = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    if (!isValidExpMonth(value)) return;
    setExpDate({ ...expDate, month: value });

    if (value.length === EXP_DATE_DIGITS) {
      expYearInputRef.current?.focus();
    }
  };

  const onBlurExpDate = ({ target: { value } }: FocusEvent<HTMLInputElement>, index: keyof ExpDate) => {
    if (value.length !== 1) return;

    setExpDate({ ...expDate, [index]: EXP_DATE_WHITESPACE_CHARACTER + value });
  };

  return (
    <AddCardInputLabel label={LABEL.EXP_DATE} width="40%">
      <AddCardInputContainer>
        <ExpDateInput dateType="month" expDate={expDate} onChange={onChangeExpMonth} onBlur={onBlurExpDate} />
        /
        <ExpDateInput
          dateType="year"
          ref={expYearInputRef}
          expDate={expDate}
          onChange={onChangeExpYear}
          onBlur={onBlurExpDate}
        />
      </AddCardInputContainer>
    </AddCardInputLabel>
  );
};

export default ExpDateInputs;
