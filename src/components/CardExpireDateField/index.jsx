import PropTypes from 'prop-types';
import useErrorMessage from 'hooks/useErrorMessage';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

import { validateExpireDate } from 'validators';
import { EXPIRE_DATE } from 'constants';

function CardExpireDateField({ expireMonth, expireYear, onChange }) {
  const { errorMessage, handleError } = useErrorMessage({
    state: { expireMonth, expireYear },
    validate: validateExpireDate,
    isAnyValueEmpty: !expireMonth || !expireYear,
  });

  return (
    <FieldSet title="만료일" inputWidth={50} errorMessage={errorMessage}>
      <TextField
        name="expireMonth"
        value={expireMonth}
        placeholder="MM"
        maxLength={EXPIRE_DATE.MONTH_LENGTH}
        onChange={onChange}
        onBlur={handleError}
      />
      /
      <TextField
        name="expireYear"
        value={expireYear}
        placeholder="YY"
        maxLength={EXPIRE_DATE.YEAR_LENGTH}
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
