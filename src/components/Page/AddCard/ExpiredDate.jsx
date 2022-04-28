import React from "react";
import FieldSet from "../../FieldSet";
import ExpiredDateInput from "../../Input/ExpiredDateInput";

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

export default ExpiredDate;
