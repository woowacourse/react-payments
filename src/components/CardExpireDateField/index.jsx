import { useContext } from 'react';
import useErrorMessage from 'hooks/useErrorMessage';
import { CardContext } from 'contexts';

import { FieldSet, TextField } from 'components/@common';

import { EXPIRE_DATE } from 'constants';
import { validateExpireDate } from 'validators';

function CardExpireDateField() {
  const { expireMonth, expireYear, onChangeTextField } = useContext(CardContext);
  const { errorMessage, handleError } = useErrorMessage({
    state: { expireMonth, expireYear },
    validate: validateExpireDate,
    isAnyValueEmpty: !expireMonth || !expireYear,
  });

  return (
    <FieldSet title="만료일" inputWidth={50} errorMessage={errorMessage}>
      <TextField
        name={EXPIRE_DATE.MONTH.TEXT_FIELD_NAME}
        value={expireMonth}
        placeholder="MM"
        maxLength={EXPIRE_DATE.MONTH.LENGTH}
        onChange={onChangeTextField}
        onBlur={handleError}
      />
      /
      <TextField
        name={EXPIRE_DATE.YEAR.TEXT_FIELD_NAME}
        value={expireYear}
        placeholder="YY"
        maxLength={EXPIRE_DATE.YEAR.LENGTH}
        onChange={onChangeTextField}
        onBlur={handleError}
      />
    </FieldSet>
  );
}

export default CardExpireDateField;
