import type { ChangeEventHandler } from 'react';

import Input from '../common/Input';
import TextField from '../common/TextField';

import useCardFormValue from '../../hooks/useCardFormValue';

interface Props {
  handleNumberChange: ChangeEventHandler<HTMLInputElement>;
}

const ExpiredDateField = ({ handleNumberChange }: Props) => {
  const { expiredDate } = useCardFormValue();

  return (
    <TextField label="만료일" size="medium">
      <Input
        type="text"
        minLength={2}
        maxLength={2}
        required
        tabIndex={5}
        placeholder="MM"
        value={expiredDate.month}
        onChange={handleNumberChange}
        //  ref={inputRefs[4]}
        align="center"
        data-set-value="setExpiredMonth"
      />
      <span>/</span>
      <Input
        type="text"
        minLength={2}
        maxLength={2}
        required
        tabIndex={6}
        placeholder="YY"
        value={expiredDate.year}
        onChange={handleNumberChange}
        //  ref={inputRefs[5]}
        align="center"
        data-set-value="setExpiredYear"
      />
    </TextField>
  );
};

export default ExpiredDateField;
