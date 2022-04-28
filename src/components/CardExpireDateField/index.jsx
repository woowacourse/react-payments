import PropTypes from 'prop-types';
import { useState } from 'react';

import FieldSet from 'components/@common/FieldSet';
import TextField from 'components/@common/TextField';

import { validateExpireDate } from 'validators';
import { EXPIRE_DATE } from 'constants';

function CardExpireDateField({ expireMonth, expireYear, onChange }) {
  const [errorMessage, setErrorMessage] = useState(null);

  const onBlurExpireDate = () => {
    if (!expireMonth || !expireYear) return;

    try {
      validateExpireDate(expireMonth, expireYear);
      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <FieldSet title="만료일" inputWidth={50} errorMessage={errorMessage}>
      <TextField
        name="expireMonth"
        value={expireMonth}
        maxLength={EXPIRE_DATE.MONTH_LENGTH}
        placeholder="MM"
        onChange={onChange}
        onBlur={onBlurExpireDate}
      />
      /
      <TextField
        name="expireYear"
        value={expireYear}
        maxLength={EXPIRE_DATE.YEAR_LENGTH}
        placeholder="YY"
        onChange={onChange}
        onBlur={onBlurExpireDate}
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
