import { useMemo } from 'react';

import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormNumberFieldProps } from './types';

import useCardFormValue from '../../hooks/useCardFormValue';
import useInputError from '../../hooks/useInputError';

const PasswordField = ({
  handleNumberChange,
  inputRefs,
}: CardFormNumberFieldProps) => {
  const { password } = useCardFormValue();

  const [
    isFirstPasswordError,
    handleFirstPasswordFocus,
    handleFirstPasswordBlur,
  ] = useInputError();
  const [
    isSecondPasswordError,
    handleSecondPasswordFocus,
    handleSecondPasswordBlur,
  ] = useInputError();

  const isError = useMemo(
    () => isFirstPasswordError || isSecondPasswordError,
    [isFirstPasswordError, isSecondPasswordError],
  );

  return (
    <TextField label="카드 비밀번호" size="medium" isError={isError} split>
      <Input
        type="password"
        name="password"
        inputMode="numeric"
        minLength={1}
        maxLength={1}
        required
        tabIndex={9}
        value={password?.first}
        onChange={handleNumberChange}
        onFocus={handleFirstPasswordFocus}
        onBlur={handleFirstPasswordBlur}
        ref={inputRefs[8]}
        align="center"
        data-property="first"
      />
      <Input
        type="password"
        name="password"
        inputMode="numeric"
        minLength={1}
        maxLength={1}
        required
        tabIndex={10}
        value={password?.second}
        onChange={handleNumberChange}
        onFocus={handleSecondPasswordFocus}
        onBlur={handleSecondPasswordBlur}
        ref={inputRefs[9]}
        align="center"
        data-property="second"
      />
      <p>﹒</p>
      <p>﹒</p>
    </TextField>
  );
};

export default PasswordField;
