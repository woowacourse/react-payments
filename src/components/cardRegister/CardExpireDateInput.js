import { useContext, useState, useEffect } from 'react';

import styled from 'styled-components';
import { CardInfoContext } from '../../providers/CardInfoProvider';
import { isAvailableDate } from '../../utils/date';
import { AutoFocusInputContainer } from '../common/AutoFocusInputContainer';

import {
  InputContainer,
  InputTitle,
  InputBasic,
  InputBox,
} from '../common/styled';

const dateLimit = {
  month: 12,
  year: 99,
};

export const CardExpireDateInput = () => {
  const context = useContext(CardInfoContext);

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

  useEffect(() => {
    const isValidLength =
      expireDate.month.length === 2 && expireDate.year.length === 2;

    context.setInputCompleted(
      'expireDate',
      isAvailableDate(expireDate.month, expireDate.year) && isValidLength
    );
  }, [expireDate]);

  const updateTypedExpireDate = (e, name) => {
    if (e.target.value > dateLimit[name]) {
      return;
    }

    const paddedDate =
      e.target.value.length === 1
        ? e.target.value.padStart(2, '0')
        : e.target.value;

    setExpireDate((prev) => ({
      ...prev,
      [name]: paddedDate,
    }));

    context.setCardExpireDate(name, paddedDate);
  };

  return (
    <InputContainer>
      <InputTitle>만료일</InputTitle>
      <Style.ExpireDateInputBox>
        <AutoFocusInputContainer maxValueLength={2}>
          <Style.ExpireDateInputBasic
            value={expireDate.month}
            onChange={handleMonthInput}
            onBlur={(e) => {
              updateTypedExpireDate(e, 'month');
            }}
            type="text"
            placeholder="MM"
          />
          /
          <Style.ExpireDateInputBasic
            value={expireDate.year}
            onChange={handleYearInput}
            onBlur={(e) => {
              updateTypedExpireDate(e, 'year');
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
