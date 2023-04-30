import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormNumberFieldProps } from './types';

import useCardFormValue from '../../hooks/useCardFormValue';

const ExpiredDateField = ({
  handleNumberChange,
  inputRefs,
}: CardFormNumberFieldProps) => {
  const { expiredDate } = useCardFormValue();

  return (
    <TextField label="만료일" size="medium">
      <Input
        type="text"
        inputMode="numeric"
        minLength={2}
        maxLength={2}
        required
        tabIndex={5}
        placeholder="MM"
        value={expiredDate.month}
        onChange={handleNumberChange}
        ref={inputRefs[4]}
        align="center"
        data-set-value="setExpiredMonth"
      />
      <span>/</span>
      <Input
        type="text"
        inputMode="numeric"
        minLength={2}
        maxLength={2}
        required
        tabIndex={6}
        placeholder="YY"
        value={expiredDate.year}
        onChange={handleNumberChange}
        ref={inputRefs[5]}
        align="center"
        data-set-value="setExpiredYear"
      />
    </TextField>
  );
};

export default ExpiredDateField;
