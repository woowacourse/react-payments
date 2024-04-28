import FormField from '../FormField';
import Input from '../../Input/Input';
import InputField from '../../InputField/InputField';
import MESSAGE from '../../../constants/Message';
import CONDITION from '../../../constants/Condition';
import { UserNameStateType } from '../../../hooks/useUserName';

const { PLACEHOLDER, TITLE, LABEL } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface UserNameProps {
  userNameState: UserNameStateType;
}

const UserName = ({ userNameState }: UserNameProps) => {
  return (
    <FormField title={TITLE.userName}>
      <InputField label={LABEL.userName} error={userNameState.errorMessage}>
        <Input
          placeholder={PLACEHOLDER.userName}
          value={userNameState.value}
          maxLength={MAX_LENGTH.userName}
          onChange={userNameState.setValue}
          invalid={userNameState.isError}
          autoFocus
        />
      </InputField>
    </FormField>
  );
};

export default UserName;
