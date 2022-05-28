import { useContext } from 'react';
import useErrorMessage from 'hooks/useErrorMessage';
import { CardContext } from 'contexts';

import { FieldSet, TextField } from 'components/@common';

import { USER_NAME } from 'constants';
import { validateUserName } from 'validators';

function CardUserNameField() {
  const { userName, onChangeTextField } = useContext(CardContext);
  const { errorMessage, handleError } = useErrorMessage({
    state: userName,
    validate: validateUserName,
  });

  return (
    <FieldSet title="카드 소유자 이름 (선택)" errorMessage={errorMessage}>
      <TextField
        name={USER_NAME.TEXT_FIELD_NAME}
        value={userName}
        placeholder="소유자명은 영문만 입력 가능"
        maxLength={USER_NAME.MAX_LENGTH}
        onChange={onChangeTextField}
        onBlur={handleError}
      />
      <div className="input-length-text">{`${userName.length} / ${USER_NAME.MAX_LENGTH}`}</div>
    </FieldSet>
  );
}

export default CardUserNameField;
