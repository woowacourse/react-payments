import React from 'react';
import { useAppDispatch, useAppState } from '../../../hooks/hooks';
import { ActionType } from '../../../types';
import {
  insertAt,
  isNum,
  removeAt,
  removeHyphens,
  removeWhiteSpaces,
  transformToCardFormat,
} from '../../../utils';
import { createAction } from '../../../context/Provider';
import CardNumberInput from './CardNumberInput';

function CardNumberInputContainer() {
  const { cardNumber } = useAppState();
  const dispatch = useAppDispatch();

  const handleCardNumberInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { value, selectionStart } = input;

    // 싹다 지운 경우, 진짜 싹다 지운다
    if (value === '') {
      dispatch(createAction(ActionType.INPUT_CARDNUMBER, ''));
      return;
    }

    if (selectionStart === null) return;

    const pureValue = removeHyphens(removeWhiteSpaces(value));

    // 입력하는 경우
    if (cardNumber.length < pureValue.length) {
      const cursor = selectionStart - 1;
      const insertedChar = value[cursor];

      // 숫자가 아니면
      if (!isNum(insertedChar)) {
        // 커서를 다시 원래 자리로 되돌린다
        queueMicrotask(() => {
          input.setSelectionRange(cursor, cursor);
        });
        return;
      }

      const isLastPosition = value.length - 1 === cursor;
      let newNumber = cardNumber + insertedChar; // 마지막에 입력한거라고 우선 가정한다

      if (!isLastPosition) {
        if (cursor < 4) {
          newNumber = insertAt(cardNumber, cursor, insertedChar);
        } else if (cursor > 6 && cursor < 11) {
          newNumber = insertAt(cardNumber, cursor - 3, insertedChar);
        } else if (cursor > 13 && cursor < 18) {
          newNumber = insertAt(cardNumber, cursor - 6, insertedChar);
        } else if (cursor > 20 && cursor < 25) {
          newNumber = insertAt(cardNumber, cursor - 9, insertedChar);
        }
      }

      // 길이가 16을 넘는다면 더 입력 못하게 만들어야지!
      if (newNumber.length > 16) return;

      // 오른쪽에 있는 녀석이 스페이스 바나 -이면 입력 불가능!
      const rightChar = value.charAt(cursor + 1);
      if (rightChar === ' ' || rightChar === '-') return;

      queueMicrotask(() => {
        let newCursor = selectionStart;
        if (cursor === 4 || cursor === 11 || cursor === 18) newCursor += 3;
        input.setSelectionRange(newCursor, newCursor);
      });

      // 입력된 값을 formatting해서 넣는다
      dispatch(createAction(ActionType.INPUT_CARDNUMBER, newNumber));
      return;
    }

    // 지울때
    const cursor = selectionStart;
    let newCardNumber = cardNumber;
    if (cursor < 4) {
      newCardNumber = removeAt(cardNumber, cursor);
    } else if (cursor < 11) {
      newCardNumber = removeAt(cardNumber, cursor - 3);
    } else if (cursor < 18) {
      newCardNumber = removeAt(cardNumber, cursor - 6);
    } else {
      newCardNumber = removeAt(cardNumber, cursor - 9);
    }

    queueMicrotask(() => {
      let newCursor = selectionStart;
      if (cursor === 6 || cursor === 13 || cursor === 21) newCursor -= 3;
      input.setSelectionRange(newCursor, newCursor);
    });

    dispatch(createAction(ActionType.INPUT_CARDNUMBER, newCardNumber));
    return;
  };

  return (
    <CardNumberInput onChange={handleCardNumberInput} value={transformToCardFormat(cardNumber)} />
  );
}

export default CardNumberInputContainer;
