import Input from '../Input/Input';
import InputField from '../InputField/InputField';
import FormField from './FormField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';
import { ShowNextFieldOnLastElementBlurParams } from '../../hooks/useCreateNextField';

const { TITLE, LABEL, ERROR, PLACEHOLDER } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface UserNameProps {
  userNameState: string;
  setUserNameState: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isUserNameError: boolean;
  showNextFieldOnLastElementBlur: (params: ShowNextFieldOnLastElementBlurParams) => void;
}
const UserName = ({
  userNameState,
  setUserNameState,
  isUserNameError,
  showNextFieldOnLastElementBlur,
}: UserNameProps) => {
  const userNameErrorMessage = isUserNameError ? ERROR.userName : '';

  const isFill = userNameState !== '';

  return (
    <FormField title={TITLE.userName}>
      <InputField label={LABEL.userName} error={userNameErrorMessage}>
        <Input
          aria-label="소유자_이름"
          placeholder={PLACEHOLDER.userName}
          value={userNameState}
          maxLength={MAX_LENGTH.userName}
          onChange={setUserNameState}
          aria-invalid={isUserNameError}
          onBlur={() => {
            showNextFieldOnLastElementBlur({
              isFill,
              isFieldError: userNameErrorMessage !== '',
              nextIndex: 4,
            });
          }}
          autoFocus
        />
      </InputField>
    </FormField>
  );
};

export default UserName;
