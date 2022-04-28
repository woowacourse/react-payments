import PropTypes from 'prop-types';
import useErrorMessage from 'hooks/useErrorMessage';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

import { validateUserName } from 'validators';
import { USER_NAME } from 'constants';

function CardUserNameField({ userName, onChange }) {
  const { errorMessage, handleError } = useErrorMessage({
    state: userName,
    validate: validateUserName,
  });

  return (
    <FieldSet title="카드 소유자 이름 (선택)" errorMessage={errorMessage}>
      <TextField
        name="userName"
        value={userName}
        placeholder="소유자명은 영문만 입력 가능"
        maxLength={USER_NAME.MAX_LENGTH}
        onChange={onChange}
        onBlur={handleError}
      />
      <div className="input-length-text">{`${userName.length} / ${USER_NAME.MAX_LENGTH}`}</div>
    </FieldSet>
  );
}

CardUserNameField.defaultProps = {
  userName: '',
};

CardUserNameField.propTypes = {
  userName: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CardUserNameField;
