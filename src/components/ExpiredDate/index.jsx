import FieldSet from '../FieldSet';
import ExpiredDateInput from '../Input/ExpiredDateInput';
import PropTypes from 'prop-types';

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
      {
        <ExpiredDateInput
          expiredMonth={expiredMonth}
          expiredYear={expiredYear}
          onChangeExpiredMonth={onChangeExpiredMonth}
          onChangeExpiredYear={onChangeExpiredYear}
        />
      }
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
