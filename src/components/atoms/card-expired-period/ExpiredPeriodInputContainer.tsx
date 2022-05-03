import React, { useRef } from 'react';
import { useAppDispatch, useAppState } from '../../../hooks/hooks';
import { createAction } from '../../../context/Provider';
import { ActionType } from '../../../types';
import CardFormInput from '../CardFormInput';
import { css } from '@emotion/react';
import { isNum, removeWhiteSpaces } from '../../../utils';

const style = css({
  height: '45px',
  width: '100%',
  borderRadius: '7px',
  maxWidth: '68px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '18px',
  textAlign: 'center',
  '&:focus': {
    boxShadow: 'none',
  },
});

function ExpiredPeriodInputContainer() {
  const { expiredPeriodMonth, expiredPeriodYear } = useAppState();
  const dispatch = useAppDispatch();

  const secondExpiredPeriodInputRef = useRef<HTMLInputElement>(null);

  const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (Number(value) === 0) {
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_MONTH, ''));
      return;
    }

    if (value.length > 2 || !isNum(value)) return;

    if (value.length <= expiredPeriodMonth.length) {
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_MONTH, value));
      return;
    }

    if (value.length === 1 && Number(value.slice(-1)) > 3) {
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_MONTH, `0${value}`));
      secondExpiredPeriodInputRef.current?.focus();
      return;
    }

    const removeSpaceValue = removeWhiteSpaces(value);

    if (removeSpaceValue.length === 2) secondExpiredPeriodInputRef.current?.focus();

    dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_MONTH, removeSpaceValue));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length > 2 || !isNum(value)) return;

    dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_YEAR, removeWhiteSpaces(value)));
  };

  return (
    <>
      <CardFormInput
        type="text"
        onChange={handleMonthChange}
        value={expiredPeriodMonth}
        placeholder="MM"
        style={style}
      />
      /
      <CardFormInput
        type="text"
        onChange={handleYearChange}
        value={expiredPeriodYear}
        placeholder="YY"
        style={style}
        ref={secondExpiredPeriodInputRef}
      />
    </>
  );
}

export default ExpiredPeriodInputContainer;
