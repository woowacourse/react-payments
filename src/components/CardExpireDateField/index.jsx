import PropTypes from 'prop-types';
import useErrorMessage from 'hooks/useErrorMessage';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

import { EXPIRE_DATE } from 'constants';
import { validateExpireDate } from 'validators';

function CardExpireDateField({ expireMonth, expireYear, onChange }) {
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
        onChange={onChange}
        onBlur={handleError}
      />
      /
      <TextField
        name={EXPIRE_DATE.YEAR.TEXT_FIELD_NAME}
        value={expireYear}
        placeholder="YY"
        maxLength={EXPIRE_DATE.YEAR.LENGTH}
        onChange={onChange}
        onBlur={handleError}
      />
    </FieldSet>
  );
}

CardExpireDateField.defaultProps = {
  expireMonth: '',
  expireYear: '',
};

CardExpireDateField.propTypes = {
  expireMonth: PropTypes.string,
  expireYear: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CardExpireDateField;
