import Input from '../common/Input';
import TextField from '../common/TextField';
import type { CardFormFieldProps } from './types';

import useCardInfoForm from './hooks/useCardInfoForm';
import useFieldFilled from './hooks/useFieldFilled';
import useCardFormValue from '../../hooks/useCardFormValue';

const PasswordField = ({ inputRefs }: CardFormFieldProps) => {
  const { password } = useCardFormValue();
  const { handleNumberChange } = useCardInfoForm();
  const isFilled = useFieldFilled(inputRefs);

  return (
    <TextField
      label="카드 비밀번호"
      size="medium"
      split
      toggleHelperText={!isFilled}
      helperText={{
        text: '카드 비밀번호 앞 두 자리를 입력해 주세요.',
        color: 'error',
      }}
    >
      <Input
        type="password"
        name="password"
        inputMode="numeric"
        minLength={1}
        maxLength={1}
        required
        value={password?.first}
        onChange={handleNumberChange}
        ref={inputRefs[0]}
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
        value={password?.second}
        onChange={handleNumberChange}
        ref={inputRefs[1]}
        align="center"
        data-property="second"
      />
      <p>﹒</p>
      <p>﹒</p>
    </TextField>
  );
};

export default PasswordField;
