import React, { useRef } from 'react';
import { useAppDispatch, useAppState } from '../../../hooks/hooks';
import { createAction } from '../../Provider';
import { ActionType } from '../../../types';
import { isNum, removeWhiteSpaces, removeSlash, transformToMMYY, removeAt, insertAt } from '../../../utils';
import ExpiredPeriodInput from './ExpiredPeriodInput';

function ExpiredPeriodInputContainer() {
  const { expiredPeriod } = useAppState();
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInsert = (input: HTMLInputElement) => {
    const { value, selectionStart } = input;
    if (selectionStart === null) return;

    const cursor = selectionStart - 1;
    const insertedChar = value[cursor];

    // 유효기간의 총 길이는 5을 넘으면 안 된다
    if (expiredPeriod.length >= 4) return;

    // 숫자가 아니면
    if (!isNum(insertedChar)) {
      // 해당 문자를 삭제하고
      input.value = removeAt(value, cursor);
      // 커서를 다시 원래 자리로 되돌린다
      queueMicrotask(() => {
        input.setSelectionRange(cursor, cursor);
      });
      return;
    }

    const insertedNum = Number(insertedChar);
    if (cursor === 0) {
      if (insertedNum > 1) {
        queueMicrotask(() => {
          input.setSelectionRange(2, 2);
        });
        dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, `0${insertedNum}`));
        return;
      }
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, `${insertedNum}`));
      return;
    }

    // 앞에 0이나 1이 있는 경우
    if (cursor === 1) {
      const prevNum = Number(expiredPeriod[0]);
      // 앞에 0이 있는데 또 0을 입력하는 경우를 방지한다
      if (prevNum === 0 && insertedNum === 0) {
        queueMicrotask(() => {
          input.setSelectionRange(selectionStart, selectionStart);
        });
        dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, expiredPeriod));
        return;
      }

      // 앞에 이미 1이 있고, 뒤에 3을 입력한 경우
      if (prevNum === 1 && insertedNum > 2) {
        queueMicrotask(() => {
          input.setSelectionRange(6, 6);
        });
        dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, `01${insertedNum}`));
        return;
      }
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, `${expiredPeriod[0]}${insertedNum}`));
      return;
    }

    // 10, 11, 03 이런 상황이나 03 / 3 이런 상황 혹은 03 / 12에서 입력하는경우
    if (cursor === 2) {
      const month = `${expiredPeriod[0]}${expiredPeriod[1]}`;
      queueMicrotask(() => {
        input.setSelectionRange(6, 6);
      });
      // 그냥 연도는 지워버리고 새로 입력한다
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, `${month}${insertedNum}`));
      return;
    }

    // 10 / 1인 경우와 10 / 11인 경우가 다르다
    if (cursor === 5) {
      if (expiredPeriod.length === 3) {
        const prevNum = `${expiredPeriod[0]}${expiredPeriod[1]}`;
        const lastNum = expiredPeriod[2];
        queueMicrotask(() => {
          input.setSelectionRange(7, 7);
        });
        dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, `${prevNum}${insertedNum}${lastNum}`));
        return;
      }
      const prevNum = `${expiredPeriod[0]}${expiredPeriod[1]}`;
      queueMicrotask(() => {
        input.setSelectionRange(6, 6);
      });
      // 그냥 연도는 지워버리고 새로 입력한다
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, `${prevNum}${insertedNum}`));
      return;
    }

    // 이제 마지막에 입력하는 경우
    dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, `${expiredPeriod}${insertedNum}`));
    return;
  };
  const handleDelete = (input: HTMLInputElement, pureValue: string) => {
    const { value, selectionStart } = input;
    if (selectionStart === null) return;

    // 싹다 지우는 경우
    if (pureValue === '') {
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, ''));
      return;
    }

    const cursor = selectionStart;
    // 0번째 숫자를 지운경우
    if (cursor === 0) {
      // 10 22 인 상태에서 맨 앞의 1을 지우면 전부 지워버린다
      if (expiredPeriod[1] && Number(expiredPeriod[1]) === 0) {
        dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, ''));
        return;
      }

      // 01 22인 상황에서 맨 앞의 0을 지워도 그대로 이다
      if (expiredPeriod[0] && Number(expiredPeriod[0]) === 0) {
        queueMicrotask(() => {
          input.setSelectionRange(1, 1);
        });
        dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, expiredPeriod));
        return;
      }

      // 12 11인 상황에서 맨 앞의 1을 지우면 02 11이 된다
      const month = Number(expiredPeriod.slice(0, 2));
      if (month > 10) {
        queueMicrotask(() => {
          input.setSelectionRange(1, 1);
        });
        const expiredPeriodArr = expiredPeriod.split('');
        expiredPeriodArr[0] = '0';
        dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, expiredPeriodArr.join('')));
        return;
      }
    }

    // 1번째 숫자를 지우는 경우
    if (cursor === 1) {
      // 01 22 이런 경우라면, 싹다 지운다
      if (Number(expiredPeriod[0]) === 0) {
        dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, ''));
        return;
      }

      // 11 22 이런 경우라면, 앞의 1을 월로 사용한다
      queueMicrotask(() => {
        input.setSelectionRange(2, 2);
      });
      const expiredPeriodArr = expiredPeriod.split('');
      expiredPeriodArr[0] = '0';
      expiredPeriodArr[1] = expiredPeriod.charAt(0);
      dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, expiredPeriodArr.join('')));
      return;
    }

    // 스페이스 / 스페이스 여기를 지우는 경우
    if (cursor > 1 && cursor < 5) {
      // 그냥 그자리에 냅둔다
      queueMicrotask(() => {
        input.setSelectionRange(cursor, cursor);
      });
      return;
    }

    // 년도를 지우는 경우는 그냥 지우면 된다
    dispatch(createAction(ActionType.INPUT_EXPIRED_PERIOD, pureValue));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { value, selectionStart } = input;
    if (selectionStart === null) return;

    const pureValue = removeWhiteSpaces(removeSlash(value));

    if (expiredPeriod.length < pureValue.length) {
      return handleInsert(input);
    }
    handleDelete(input, pureValue);
  };

  return <ExpiredPeriodInput onChange={handleChange} ref={inputRef} value={transformToMMYY(expiredPeriod)} />;
}

export default ExpiredPeriodInputContainer;
