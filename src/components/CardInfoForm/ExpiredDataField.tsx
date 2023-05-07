import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormFieldProps } from './types';

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
      label="만료일"
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
        pattern="^(0?[1-9]|1[0-2])$"
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
        pattern="^(2[3-9]|[3-9]\d)$"
      />
    </TextField>
  );
};

export default ExpiredDateField;
