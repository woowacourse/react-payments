import React from "react";
import FieldSet from "../../FieldSet";
import ExpiredDateInput from "../../Input/ExpiredDateInput";

const ExpiredNumber = () => {
  return (
    <FieldSet
      id="expiredNumber"
      description="만료일"
      errorMessage="유효한 만료 숫자를 입력하세요"
    >
      {<ExpiredDateInput />}
    </FieldSet>
  );
};

export default ExpiredNumber;
