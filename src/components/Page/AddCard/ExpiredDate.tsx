import React from 'react';
import PropTypes from 'prop-types';
import FieldSet from 'components/FieldSet';
import ExpiredDateInput from 'components/Input/ExpiredDateInput';

type ExpiredDateProps = {
  expiredMonth: string;
  expiredYear: string;
  onChangeExpiredMonth: Function;
  onChangeExpiredYear: Function;
  isError: boolean;
};

const ExpiredDate = ({
  expiredMonth,
  expiredYear,
  onChangeExpiredMonth,
  onChangeExpiredYear,
  isError,
}: ExpiredDateProps) => {
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
  expiredMonth: PropTypes.string,
  expiredYear: PropTypes.string,
  onChangeExpiredMonth: PropTypes.func,
  onChangeExpiredYear: PropTypes.func,
  isError: PropTypes.bool,
};

export default ExpiredDate;
