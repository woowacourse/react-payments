import { useState } from 'react';
import { InputWithCounter } from '../../../../components';
import { CARD, ERROR_MESSAGE } from '../../../../constants';
import { isValidUserName } from '../../../../utils/validator';

export default function UserName({ userName, setUserName }) {
  const [userNameErrorMessage, setUserNameErrorMessage] = useState('');

  return (
    <InputWithCounter
      id="user-name"
      type="text"
      inputStyle={{ width: '100%' }}
      label="카드 소유자 이름(선택)"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      letterCounter={{ current: userName.length, max: CARD.USER_NAME_MAX_LENGTH }}
      maxLength={CARD.USER_NAME_MAX_LENGTH}
      value={userName}
      onChange={(event) => {
        const name = event.target.value;

        if (!isValidUserName(name)) {
          setUserNameErrorMessage(ERROR_MESSAGE.INVALID_USER_NAME);
          return;
        }

        setUserName(event.target.value.toUpperCase());
        setUserNameErrorMessage('');
      }}
      errorMessage={userNameErrorMessage}
    />
  );
}
