import { useContext } from 'react';
import useErrorMessage from 'hooks/useErrorMessage';
import { CardContext } from 'contexts';

import { FieldSet, TextField } from 'components/@common';

import { CARD_PASSWORD } from 'constants';
import { validateCardPassword } from 'validators';

function CardPasswordField() {
  const { cardPassword, onChangeTextField } = useContext(CardContext);
  const { errorMessage, handleError } = useErrorMessage({
    state: cardPassword,
    validate: validateCardPassword,
  });

  return (
    <FieldSet title="카드 비밀번호" inputWidth={50} errorMessage={errorMessage}>
      <TextField
        type="password"
        name={CARD_PASSWORD.TEXT_FIELD_NAME}
        value={cardPassword}
        placeholder="앞 2자리"
        maxLength={CARD_PASSWORD.LENGTH}
        onChange={onChangeTextField}
        onBlur={handleError}
      />
      <div className="input-security-masking" />
      <div className="input-security-masking" />
    </FieldSet>
  );
}

export default CardPasswordField;
