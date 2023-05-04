import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormFieldProps } from './types';

import useCardInfoForm from './hooks/useCardInfoForm';
import useFieldFilled from './hooks/useFieldFilled';
import useCardFormValue from '../../hooks/useCardFormValue';

const ExpiredDateField = ({ inputRefs }: CardFormFieldProps) => {
  const { expiredDate } = useCardFormValue();
  const { handleNumberChange } = useCardInfoForm();
  const isFilled = useFieldFilled(inputRefs);

  return (
    <TextField
      label="만료일"
      size="medium"
      toggleHelperText={!isFilled}
      helperText={{
        text: '만료일을 MMYY 형식으로 입력해 주세요. (ex. 1223)',
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
        ref={inputRefs[0]}
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
        placeholder="YY"
        value={expiredDate.year}
        onChange={handleNumberChange}
        ref={inputRefs[1]}
        align="center"
        data-property="year"
      />
    </TextField>
  );
};

export default ExpiredDateField;
