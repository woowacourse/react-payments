import React, { useEffect } from 'react';

import { InputBasic } from '../common/InputBasic';
import { InputBox } from '../common/InputBox';
import { InputContainer, InputTitle } from '../common/styled';

export const CardExpireDateInputForm = ({
  expireDate,
  handleExpireDateInput,
  handleCardExpireCheck,
}) => {
  const handleMonthInput = (e) => {
    if (isNaN(e.nativeEvent.data) || parseInt(e.target.value) > 12) {
      return;
    }

    if (e.target.value.length === 3) {
      e.target.value = parseInt(e.target.value);
    }

    if (e.target.value.length === 1) {
      e.target.value = '0' + e.target.value;
    }

    if (e.target.value === '0' || e.target.value === '00') {
      e.target.value = '00';
    }

    handleExpireDateInput({
      type: 'setExpireDate',
      payload: { key: 'month', date: e.target.value },
    });
  };

  const handleYearInput = (e) => {
    if (isNaN(e.nativeEvent.data) || e.target.value.length > 2) {
      return;
    }

    handleExpireDateInput({
      type: 'setExpireDate',
      payload: { key: 'year', date: e.target.value },
    });
  };

  useEffect(() => {
    if (expireDate.year === '' || expireDate.month === '') {
      return;
    }

    const isCardExpireDateCompleted = () => {
      const currentDate = new Date();
      const currentYear = String(currentDate.getFullYear()).slice(2, 4);
      const currentMonth = currentDate.getMonth() + 1;

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

    handleCardExpireCheck(isCardExpireDateCompleted());
  }, [expireDate]);

  return (
    <InputContainer>
      <InputTitle>만료일</InputTitle>
      <InputBox width="50%" justifyContent="center">
        <InputBasic
          width="25%"
          value={expireDate?.month}
          onChange={handleMonthInput}
          type="text"
          placeholder="MM"
        />
        /
        <InputBasic
          width="25%"
          value={expireDate?.year}
          onChange={handleYearInput}
          type="text"
          placeholder="YY"
        />
      </InputBox>
    </InputContainer>
  );
};
