import type { ChangeEventHandler } from 'react';

import Input from '../common/Input';
import TextField from '../common/TextField';

import useCardFormValue from '../../hooks/useCardFormValue';

interface Props {
  handleNumberChange: ChangeEventHandler<HTMLInputElement>;
}

const PasswordField = ({ handleNumberChange }: Props) => {
  const { password } = useCardFormValue();

  return (
    <TextField label="카드 비밀번호" size="medium" split>
      <Input
        type="password"
        inputMode="numeric"
        minLength={1}
        maxLength={1}
        required
        tabIndex={9}
        value={password?.first}
        onChange={handleNumberChange}
        //ref={inputRefs[8]}
        align="center"
        data-set-value="setFirstPassword"
      />
      <Input
        type="password"
        inputMode="numeric"
        minLength={1}
        maxLength={1}
        required
        tabIndex={10}
        value={password?.second}
        onChange={handleNumberChange}
        //ref={inputRefs[9]}
        align="center"
        data-set-value="setSecondPassword"
      />
      <p>﹒</p>
      <p>﹒</p>
    </TextField>
  );
};

export default PasswordField;
