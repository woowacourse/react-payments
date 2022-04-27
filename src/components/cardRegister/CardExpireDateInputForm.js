import React from 'react';

import { InputBasic } from '../common/InputBasic';
import { InputBox } from '../common/InputBox';
import { InputContainer, InputTitle } from '../common/styled';

export const CardExpireDateInputForm = ({
  expireDate,
  handleExpireDateInput,
}) => {
  const handleMonthInput = (e) => {
    if (
      isNaN(e.nativeEvent.data) ||
      e.target.value.length > 2 ||
      parseInt(e.target.value) > 12 ||
      parseInt(e.target.value) < 1
    ) {
      return;
    }

    handleExpireDateInput((prev) => ({ ...prev, month: e.target.value }));
  };

  const handleYearInput = (e) => {
    if (isNaN(e.nativeEvent.data) || e.target.value.length > 2) {
      return;
    }

    handleExpireDateInput((prev) => ({ ...prev, year: e.target.value }));
  };

  return (
    <InputContainer>
      <InputTitle>만료일</InputTitle>
      <InputBox width="50%">
        <InputBasic
          value={expireDate?.month}
          onChange={handleMonthInput}
          type="text"
          placeholder="MM"
        />
        /
        <InputBasic
          value={expireDate?.year}
          onChange={handleYearInput}
          type="text"
          placeholder="YY"
        />
      </InputBox>
    </InputContainer>
  );
};
