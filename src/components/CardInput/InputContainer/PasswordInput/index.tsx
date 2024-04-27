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
  maxLength: number;
  password: string;
  passwordError: boolean;
  onPasswordChange: (value: string) => void;
}

function PasswordInput({
  maxLength,
  password,
  passwordError,
  onPasswordChange,
}: PasswordInputProps) {
  const { title, subTitle, label, placeholder } = CARD_PASSWORD_FORM_MESSAGE;

  const getErrorMessage = () => {
    if (!passwordError) {
      return;
    }
    return ERROR_MESSAGE.password;
  };

  return (
    <InputWrap title={title} subTitle={subTitle}>
      <InputField label={label}>
        <div>
          <div className={styles.inputWrap}>
            <Input
              type="number"
              name="password"
              value={password}
              maxLength={maxLength}
              placeholder={placeholder}
              isError={passwordError}
              onChange={(event) => onPasswordChange(event.target.value)}
              autoFocus
            />
          </div>
          <InputErrorMessage errorMessage={getErrorMessage()} />
        </div>
      </InputField>
    </InputWrap>
  );
}

export default PasswordInput;
