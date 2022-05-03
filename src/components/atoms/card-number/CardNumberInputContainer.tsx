import React, { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppState } from '../../../hooks/hooks';
import { ActionType } from '../../../types';
import { insertAt, isNum, removeAt, removeHyphens, removeWhiteSpaces, transformCardNumber } from '../../../utils';
import { createAction } from '../../Provider';
import CardNumberInput from './CardNumberInput';

function CardNumberInputContainer() {
  const { cardNumber } = useAppState();
  const dispatch = useAppDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  // 페이지가 로드 되었을때 기본으로 CardNumber에 focus을 준다
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInsert = (input: HTMLInputElement) => {
    const { value, selectionStart } = input;
    if (!selectionStart) return;

    const cursor = selectionStart - 1;
    const insertedChar = value[cursor];

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

    // 끝에 입력한건지 아닌지 판단한다
    const isLastPosition = value.length - 1 === cursor;
    let newNumber = cardNumber + insertedChar; // 마지막에 입력한거라고 우선 가정한다

    // 마지막 입력이 아니라, 중간에 입력한거라면
    if (!isLastPosition) {
      // 1234 - 1234 에서 첫번째 블럭에서의 입력
      if (cursor < 4) {
        // 지운 그 위치가 cardNumber와 같기 때문에 cardNumber에서도 같은 위치에 숫자를 넣어준다
        newNumber = insertAt(cardNumber, cursor, insertedChar);
      }
      // 1234 - 1234 - 1234에서 두번째 블럭에서의 입력
      else if (cursor > 6 && cursor < 11) {
        // 지운 그 위치에서 3을 뺀 위치가 cardNumber와 일치하기 때문에 3을 빼준다
        // 1234 - 1[2]34 - 1234 => 12341[2]341234 / 인덱스 계산을 다시 해서 매칭시켜줘야한다
        newNumber = insertAt(cardNumber, cursor - 3, insertedChar);
      } else if (cursor > 13 && cursor < 18) {
        newNumber = insertAt(cardNumber, cursor - 6, insertedChar);
      } else if (cursor > 20 && cursor < 25) {
        newNumber = insertAt(cardNumber, cursor - 9, insertedChar);
      }
    }

    // 길이가 16을 넘는다면 더 입력 못하게 만든다
    if (newNumber.length > 16) return;

    queueMicrotask(() => {
      let newCursor = selectionStart;
      // 커서를 방금 입력한 자리로 이동시키는데, 스페이스 - 스페이스가 생성된 경우 커서를 3칸 앞으로 더 이동시킨다
      if (cursor === 4 || cursor === 11 || cursor === 18) newCursor += 3;
      input.setSelectionRange(newCursor, newCursor);
    });

    dispatch(createAction(ActionType.INPUT_CARDNUMBER, newNumber));
    return;
  };
  const handleDelete = (input: HTMLInputElement) => {
    const { selectionStart } = input;
    if (!selectionStart) return;

    const cursor = selectionStart;
    let newCardNumber = cardNumber;
    if (cursor < 4) {
      newCardNumber = removeAt(cardNumber, cursor);
    } else if (cursor > 6 && cursor < 11) {
      newCardNumber = removeAt(cardNumber, cursor - 3);
    } else if (cursor > 13 && cursor < 18) {
      newCardNumber = removeAt(cardNumber, cursor - 6);
    } else if (cursor > 20) {
      newCardNumber = removeAt(cardNumber, cursor - 9);
    }

    queueMicrotask(() => {
      input.setSelectionRange(selectionStart, selectionStart);
    });

    dispatch(createAction(ActionType.INPUT_CARDNUMBER, newCardNumber));
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { value, selectionStart } = input;
    if (selectionStart === null) return;

    const pureValue = removeHyphens(removeWhiteSpaces(value));

    // 전체삭제한 경우 state도 전체삭제한다
    if (pureValue === '') {
      dispatch(createAction(ActionType.INPUT_CARDNUMBER, ''));
      return;
    }

    // 입력하는 경우
    if (cardNumber.length < pureValue.length) {
      return handleInsert(input);
    }
    handleDelete(input);
  };

  return <CardNumberInput onChange={handleChange} value={transformCardNumber(cardNumber, ' - ')} ref={inputRef} />;
}

export default CardNumberInputContainer;
