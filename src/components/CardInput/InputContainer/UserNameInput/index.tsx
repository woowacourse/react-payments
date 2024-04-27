import { CARD_USER_FORM_MESSAGE, ERROR_MESSAGE } from '../../../../constants';
import Input from '../../../common/Input';
import InputErrorMessage from '../../InputErrorMessage';
import InputField from '../../InputField';
import InputWrap from '../../InputWrap';

import styles from './style.module.css';

interface CardUserNameInputProps {
  userName: string;
  nameError: boolean;
  onNameChange: (value: string) => void;
  onNameInputEnter: (Event: React.KeyboardEvent<HTMLInputElement>) => void;
}

function UserNameInput({
  userName,
  nameError,
  onNameChange,
  onNameInputEnter,
}: CardUserNameInputProps) {
  const { title, subTitle, label, placeholder } = CARD_USER_FORM_MESSAGE;

  const getErrorMessage = () => {
    if (!nameError) {
      return;
    }
    return ERROR_MESSAGE.userName;
  };

  return (
    <InputWrap title={title} subTitle={subTitle}>
      <InputField label={label}>
        <div>
          <div className={styles.inputWrap}>
            <Input
              type="text"
              name="name"
              value={userName}
              placeholder={placeholder}
              isError={nameError}
              onChange={(event) => onNameChange(event.target.value)}
              onKeyDown={onNameInputEnter}
            />
          </div>
          <InputErrorMessage errorMessage={getErrorMessage()} />
        </div>
      </InputField>
    </InputWrap>
  );
}

export default UserNameInput;
