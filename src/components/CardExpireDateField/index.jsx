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
  });

  return (
    <FieldSet
      title="만료일"
      inputWidth={50}
      nextFocusLength={EXPIRE_DATE.MONTH_LENGTH}
      errorMessage={errorMessage}
    >
      <TextField
        name="expireMonth"
        type="number"
        value={expireMonth}
        placeholder="MM"
        maxLength={EXPIRE_DATE.MONTH_LENGTH}
        onChange={onChange}
        onBlur={(event) => handleError(event, !expireMonth || !expireYear)}
      />
      /
      <TextField
        name="expireYear"
        type="number"
        value={expireYear}
        placeholder="YY"
        maxLength={EXPIRE_DATE.YEAR_LENGTH}
        onChange={onChange}
        onBlur={(event) => handleError(event, !expireMonth || !expireYear)}
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
