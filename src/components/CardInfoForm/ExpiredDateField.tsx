import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormFieldProps } from './types';

import { EXPIRED_DATE_MESSAGE } from './constants/message';
import { EXPIRED_DATE_PATTERN } from './constants/pattern';
import useCardInfoForm from './hooks/useCardInfoForm';
import useFieldFilled from './hooks/useFieldFilled';
import useCardFormValue from '../../hooks/useCardFormValue';
import useExpiredDate from './hooks/useExpiredDate';

const ExpiredDateField = ({ inputRefs }: CardFormFieldProps) => {
  const { expiredDate } = useCardFormValue();
  const { handleNumberChange } = useCardInfoForm();

  const isFilled = useFieldFilled(inputRefs);
  const { errorMessage, handleDateInputBlur } = useExpiredDate();

  return (
    <TextField
      label={EXPIRED_DATE_MESSAGE.label}
      size="medium"
      toggleHelperText={!isFilled}
      helperText={{
        text: errorMessage,
        color: 'error',
      }}
    >
      <Input
        type="text"
        name="expiredDate"
        inputMode="numeric"
        minLength={2}
        maxLength={2}
        required
        placeholder="MM"
        value={expiredDate.month}
        onChange={handleNumberChange}
        onBlur={handleDateInputBlur}
        ref={inputRefs[0]}
        align="center"
        data-property="month"
        pattern={EXPIRED_DATE_PATTERN.month}
      />
      <span>/</span>
      <Input
        type="text"
        name="expiredDate"
        inputMode="numeric"
        minLength={2}
        maxLength={2}
        required
        placeholder="YY"
        value={expiredDate.year}
        onChange={handleNumberChange}
        onBlur={handleDateInputBlur}
        ref={inputRefs[1]}
        align="center"
        data-property="year"
        pattern={EXPIRED_DATE_PATTERN.year}
      />
    </TextField>
  );
};

export default ExpiredDateField;
