import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { CARD_INFO_TYPES } from '../../reducer/types';
import { isExpiredDate } from '../../utils/date';
import { AutoFocusInputContainer } from '../common/AutoFocusInputContainer';

import {
  InputContainer,
  InputTitle,
  InputBasic,
  InputBox,
} from '../common/styled';

// const isInputValueFilledWithZero = (e) =>
//   parseInt(e.nativeEvent.data) === 0 &&
//   e.target.value.length === 2 &&
//   parseInt(e.target.value) < 1;

export const CardExpireDateInput = () => {
  const [expireDate, setExpireDate] = useState({
    month: '',
    year: '',
  });

  const handleMonthInput = (e) => {
    if (isNaN(e.nativeEvent.data) || parseInt(e.target.value) > 12) {
      return;
    }

    setExpireDate((prev) => ({ ...prev, month: e.target.value }));
  };

  const handleYearInput = (e) => {
    if (isNaN(e.nativeEvent.data)) {
      return;
    }

    setExpireDate((prev) => ({ ...prev, year: e.target.value }));
  };

  const handleExpireDateInputCompleted = () => {
    if (expireDate.year === '' || expireDate.month === '') {
      return;
    }

    console.log(
      isExpiredDate(expireDate.month, expireDate.year)
        ? 'expired'
        : 'yet expired'
    );
  };
  const adjustNumberOfDigit = (e, name) => {
    if (e.target.value.length === 1)
      setExpireDate((prev) => ({
        ...prev,
        [name]: e.target.value.padStart(2, '0'),
      }));
  };

  return (
    <InputContainer>
      <InputTitle>만료일</InputTitle>
      <Style.ExpireDateInputBox>
        <AutoFocusInputContainer
          maxValueLength={2}
          onCompleted={handleExpireDateInputCompleted}
        >
          <Style.ExpireDateInputBasic
            value={expireDate.month}
            onChange={handleMonthInput}
            onBlur={(e) => {
              adjustNumberOfDigit(e, 'month');
            }}
            type="text"
            placeholder="MM"
          />
          /
          <Style.ExpireDateInputBasic
            value={expireDate.year}
            onChange={handleYearInput}
            onBlur={(e) => {
              adjustNumberOfDigit(e, 'year');
            }}
            type="text"
            placeholder="YY"
          />
        </AutoFocusInputContainer>
      </Style.ExpireDateInputBox>
    </InputContainer>
  );
};

const Style = {
  ExpireDateInputBox: styled(InputBox)`
    width: 50%;
    justify-content: center;
  `,
  ExpireDateInputBasic: styled(InputBasic)`
    width: 25%;
  `,
};
