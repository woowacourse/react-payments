import Input from '../Input/Input';
import InputField from '../InputField/InputField';
import FormField from './FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';

const { TITLE, CAPTION, LABEL, ERROR, PLACEHOLDER } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface PasswordProps {
  passwordState: string;
  setPasswordState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isPasswordError: boolean;
}

const Password = ({ passwordState, setPasswordState, isPasswordError }: PasswordProps) => {
  return (
    <FormField title={TITLE.password} caption={CAPTION.password}>
      <InputField label={LABEL.password} error={isPasswordError ? ERROR.password : ''}>
        <Input
          type="password"
          aria-label="비밀번호"
          placeholder={PLACEHOLDER.password}
          value={passwordState}
          maxLength={MAX_LENGTH.password}
          onChange={setPasswordState}
          aria-invalid={isPasswordError}
          autoFocus
        />
      </InputField>
    </FormField>
  );
};

export default Password;
