import React from "react";
import { useAppDispatch, useAppState } from "../../../hooks/hooks";
import { createAction } from "../../Provider";
import { ActionType } from "../../../types";
import { isNum } from "../../../utils";
import ExpiredPeriodInput from "./ExpiredPeriodInput";

function ExpiredPeriodInputContainer() {
  const { expiredPeriod } = useAppState();
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    // value의 총 길이는 5을 넘으면 안 된다
    if (value.length > 7) return;

    // 입력할 때
    if (expiredPeriod.length < value.length) {
      const lastChar = value.slice(-1);
      // 입력값의 마지막 글자가 숫자여야 한다
      if (!isNum(lastChar)) return;

      // value의 길이가 2이고 value값이 0일 때
      if (value.length === 2 && Number(value) === 0) {
        dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, '0'));
        return;
      }

      // 입력값의 길이가 3이면 /를 추가해준다
      if (value.length === 3) {
        const period = value.slice(0, 2) + ' / ' + lastChar;
        dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, period));
        return;
      }
      // 첫번째 입력값으로 2이상의 숫자가 입력되면 0을 앞에 붙여준다
      if (value.length === 1 && Number(lastChar) > 1) {
        dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, '0' + value));
        return;
      }
      // value가 12 초과라면 01/3
      if (Number(value) > 12) {
        const period = '0' + value.slice(0, 1) + ' / ' + lastChar
        dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, period));
        return;
      }

      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, value));
      return;
    }
    // 년도의 첫번째 숫자를 지울때 /도 같이 지워준다
    // 12 / 
    if (value.length === 5) {
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, value.slice(0, 2)));
      return;
    }

    dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, value));
    
  }

  return <ExpiredPeriodInput onChange={handleChange} value={expiredPeriod} />
}

export default ExpiredPeriodInputContainer;
