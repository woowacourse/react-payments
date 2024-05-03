import {
  CARD_PASSWORD_FORM_MESSAGE,
  ERROR_MESSAGE,
} from '../../../../constants';
import Input from '../../../common/Input';
import InputErrorMessage from '../../InputErrorMessage';
import InputField from '../../InputField';
import InputWrap from '../../InputWrap';

import styles from './style.module.css';

interface PasswordInputProps {
  password: string;
  passwordError: boolean;
  onPasswordChange: (value: string) => void;
}

function PasswordInput({
  password,
  passwordError,
  onPasswordChange,
}: PasswordInputProps) {
  const { title, subTitle, label, placeholder } = CARD_PASSWORD_FORM_MESSAGE;

  const errorMessage = passwordError ? ERROR_MESSAGE.password : undefined;

  return (
    <InputWrap title={title} subTitle={subTitle}>
      <InputField label={label}>
        <div className={styles.inputWrap}>
          <Input
            type="password"
            name="password"
            value={password}
            placeholder={placeholder}
            isError={passwordError}
            onChange={(event) => onPasswordChange(event.target.value)}
            autoFocus
          />
        </div>
        <InputErrorMessage errorMessage={errorMessage} />
      </InputField>
    </InputWrap>
  );
}

export default PasswordInput;
