import Input from '../Input/Input';
import InputField from '../InputField/InputField';
import FormField from './FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';
import { ShowNextFieldConditionParams } from '../../hooks/useCreateNextField';

const { TITLE, LABEL, ERROR, PLACEHOLDER } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface UserNameProps {
  userNameState: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isUserNameError: boolean;
  showNextFieldOnValid: (params: ShowNextFieldConditionParams) => void;
}
const UserName = ({
  userNameState,
  onChange,
  isUserNameError,
  showNextFieldOnValid,
}: UserNameProps) => {
  const userNameErrorMessage = isUserNameError ? ERROR.userName : '';

  return (
    <FormField title={TITLE.userName}>
      <InputField label={LABEL.userName} error={userNameErrorMessage}>
        <Input
          aria-label="소유자_이름"
          placeholder={PLACEHOLDER.userName}
          value={userNameState}
          maxLength={MAX_LENGTH.userName}
          onChange={onChange}
          onBlur={() =>
            showNextFieldOnValid({
              isFill: userNameState !== '',
              isFieldError: userNameErrorMessage !== '',
              nextIndex: 4,
            })
          }
          aria-invalid={isUserNameError}
          autoFocus
        />
      </InputField>
    </FormField>
  );
};

export default UserName;
