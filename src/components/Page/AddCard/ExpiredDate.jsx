import React from 'react';
import PropTypes from 'prop-types';
import FieldSet from '../../FieldSet';
import ExpiredDateInput from '../../Input/ExpiredDateInput';

const ExpiredDate = ({
  expiredMonth,
  expiredYear,
  onChangeExpiredMonth,
  onChangeExpiredYear,
  isError,
}) => {
  return (
    <FieldSet
      id="expiredNumber"
      description="만료일"
      errorMessage="유효한 만료 숫자를 입력하세요"
      isError={isError}
    >
      <ExpiredDateInput
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        onChangeExpiredMonth={onChangeExpiredMonth}
        onChangeExpiredYear={onChangeExpiredYear}
      />
    </FieldSet>
  );
};

ExpiredDate.propTypes = {
  expiredMonth: PropTypes.string.isRequired,
  expiredYear: PropTypes.string.isRequired,
  onChangeExpiredMonth: PropTypes.func.isRequired,
  onChangeExpiredYear: PropTypes.func.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default ExpiredDate;
