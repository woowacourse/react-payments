import React, { useEffect, useState } from "react";

import { currentDate } from "utils/currentDate";
import { RULE_INPUT } from "constants/constants";
import {
  InputBasic,
  InputBox,
  InputTitle,
  InputContainer,
} from "components/common";

export const CardExpireDateInput = ({
  expireDate,
  isValid,
  handleExpireDateInput,
  handleCardExpireCheck,
}) => {
  useEffect(() => {
    if (expireDate.year === "" || expireDate.month === "") {
      return;
    }

    const isValidate = isCardExpireDateValidate(expireDate);
    handleCardExpireCheck(isValidate);
  }, [expireDate]);

  const handleMonthInput = (e) => {
    if (isNaN(e.target.value) || parseInt(e.target.value) > 12) {
      return;
    }

    handleExpireDateInput((prev) => ({ ...prev, month: e.target.value }));
  };

  const handleMonthBlur = (e) => {
    if (e.target.value.length === 1) {
      e.target.value = "0" + e.target.value;
    }

    handleExpireDateInput((prev) => ({ ...prev, month: e.target.value }));
  };

  const handleYearInput = (e) => {
    if (isNaN(e.target.value)) {
      return;
    }

    handleExpireDateInput((prev) => ({ ...prev, year: e.target.value }));
  };

  const handleYearBlur = (e) => {
    if (e.target.value.length === 1) {
      e.target.value = "0" + e.target.value;
    }

    handleExpireDateInput((prev) => ({ ...prev, year: e.target.value }));
  };

  return (
    <InputContainer>
      <InputTitle isValid={isValid}>만료일</InputTitle>
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
