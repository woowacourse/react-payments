import React, { useRef } from 'react';
import { css } from '@emotion/react';
import { useAppDispatch, useAppState } from 'hooks/hooks';
import { createAction } from 'context/Provider';
import { ActionType } from 'types';
import { isNum, removeWhiteSpaces } from 'utils';
import CardFormInput from 'components/card/CardFormInput';

const style = css({
  height: '45px',
  maxWidth: '68px',
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

    if (
      expiredPeriodYear === new Date().getFullYear().toString().substring(2, 4) &&
      Number(value) < new Date().getMonth() + 1
    ) {
      return;
    }

    if (value.length <= expiredPeriodMonth.length) {
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_MONTH, value));
      return;
    }

    if (value.length === 1 && Number(value.slice(-1)) > 1) {
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_MONTH, `0${value}`));
      secondExpiredPeriodInputRef.current?.focus();
      return;
    }

    if (Number(value) > 12) {
      return;
    }

    const removeSpaceValue = removeWhiteSpaces(value);

    if (removeSpaceValue.length === 2) secondExpiredPeriodInputRef.current?.focus();

    dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_MONTH, removeSpaceValue));
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (
      value === new Date().getFullYear().toString().substring(2, 4) &&
      Number(expiredPeriodMonth) < new Date().getMonth() + 1
    ) {
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_MONTH, ''));
    }

    if (Number(value) === 0) {
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD_YEAR, ''));
      return;
    }

    if (value.length === 2 && value < new Date().getFullYear().toString().substring(2, 4)) {
      return;
    }

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
        css={style}
      />
      /
      <CardFormInput
        type="text"
        onChange={handleYearChange}
        value={expiredPeriodYear}
        placeholder="YY"
        css={style}
        ref={secondExpiredPeriodInputRef}
      />
    </>
  );
}

export default ExpiredPeriodInputContainer;
