import FormField from '../FormField';
import Input from '../../Input/Input';
import InputField from '../../InputField/InputField';
import MESSAGE from '../../../constants/Message';
import CONDITION from '../../../constants/Condition';
import { PasswordStateType } from '../../../hooks/usePassword';

const { PLACEHOLDER, TITLE, LABEL, CAPTION } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface PasswordProps {
  passwordState: PasswordStateType;
}

const Password = ({ passwordState }: PasswordProps) => {
  return (
    <FormField title={TITLE.password} caption={CAPTION.password}>
      <InputField label={LABEL.password} error={passwordState.errorMessage}>
        <Input
          placeholder={PLACEHOLDER.password}
          value={passwordState.value}
          maxLength={MAX_LENGTH.password}
          onChange={passwordState.setValue}
          invalid={passwordState.isError}
          type="password"
          autoFocus
        />
      </InputField>
    </FormField>
  );
};

export default Password;
