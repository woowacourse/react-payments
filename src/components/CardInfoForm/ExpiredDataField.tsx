import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormNumberFieldProps } from './types';

import useCardFormValue from '../../hooks/useCardFormValue';
import useInputError from '../../hooks/useInputError';
import { useMemo } from 'react';

const ExpiredDateField = ({
  handleNumberChange,
  inputRefs,
}: CardFormNumberFieldProps) => {
  const { expiredDate } = useCardFormValue();

  const [isMonthError, handleMonthFocus, handleMonthBlur] = useInputError();
  const [isYearError, handleYearFocus, handleYearBlur] = useInputError();

  const isError = useMemo(
    () => isMonthError || isYearError,
    [isMonthError, isYearError],
  );

  return (
    <TextField label="만료일" size="medium" isError={isError}>
      <Input
        type="text"
        name="expiredDate"
        inputMode="numeric"
        minLength={2}
        maxLength={2}
        required
        tabIndex={5}
        placeholder="MM"
        value={expiredDate.month}
        onChange={handleNumberChange}
        onFocus={handleMonthFocus}
        onBlur={handleMonthBlur}
        ref={inputRefs[4]}
        align="center"
        data-property="month"
      />
      <span>/</span>
      <Input
        type="text"
        name="expiredDate"
        inputMode="numeric"
        minLength={2}
        maxLength={2}
        required
        tabIndex={6}
        placeholder="YY"
        value={expiredDate.year}
        onChange={handleNumberChange}
        onFocus={handleYearFocus}
        onBlur={handleYearBlur}
        ref={inputRefs[5]}
        align="center"
        data-property="year"
      />
    </TextField>
  );
};

export default ExpiredDateField;
