import React, { useEffect } from "react";

import { InputBasic } from "components/common/InputBasic";
import { InputBox } from "components/common/InputBox";
import { InputContainer, InputTitle } from "components/common/styled";
import { currentDate } from "utils/currentDate";
import { RULE_INPUT } from "constants/constants";

export const CardExpireDateInputForm = ({
  expireDate,
  handleExpireDateInput,
  handleCardExpireCheck,
}) => {
  useEffect(() => {
    if (expireDate.year === "" || expireDate.month === "") {
      return;
    }

    handleCardExpireCheck(isCardExpireDateValidate(expireDate));
  }, [expireDate]);

  const handleMonthInput = (e) => {
    if (parseInt(e.target.value) > 12) {
      return;
    }

    handleExpireDateInput((prev) => ({ ...prev, month: e.target.value }));
  };

  const handleMonthBlur = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }

    if (e.target.value.length === 1) {
      e.target.value = "0" + e.target.value;
    }

    handleExpireDateInput((prev) => ({ ...prev, month: e.target.value }));
  };

  const handleYearInput = (e) => {
    handleExpireDateInput((prev) => ({ ...prev, year: e.target.value }));
  };

  const handleYearBlur = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }

    if (e.target.value.length === 1) {
      e.target.value = "0" + e.target.value;
    }

    handleExpireDateInput((prev) => ({ ...prev, year: e.target.value }));
  };

  return (
    <InputContainer>
      <InputTitle>만료일</InputTitle>
      <InputBox width="50%" justifyContent="center">
        <InputBasic
          width="25%"
          id="input_expire_month"
          value={expireDate?.month}
          onChange={handleMonthInput}
          onBlur={handleMonthBlur}
          type="text"
          maxLength="2"
          pattern={RULE_INPUT.EXPIRE_DATE_RULE}
          placeholder="MM"
        />
        /
        <InputBasic
          width="25%"
          id="input_expire_year"
          value={expireDate?.year}
          onChange={handleYearInput}
          onBlur={handleYearBlur}
          type="text"
          maxLength="2"
          pattern={RULE_INPUT.EXPIRE_DATE_RULE}
          placeholder="YY"
        />
      </InputBox>
    </InputContainer>
  );
};

const { currentYear, currentMonth } = currentDate();

const isCardExpireDateValidate = (expireDate) => {
  if (parseInt(expireDate.year) < parseInt(currentYear)) {
    return false;
  }

  if (
    expireDate.year === currentYear &&
    parseInt(expireDate.month) < currentMonth
  ) {
    return false;
  }

  if (parseInt(expireDate.month) > 12 || parseInt(expireDate.month) < 1) {
    return false;
  }

  return true;
};
