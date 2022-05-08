import React from 'react';
import CardOwnerNameInput from './CardOwnerNameInput';
import { useAppDispatch, useAppState } from '../../../hooks/hooks';
import { ActionType } from '../../../types';
import { createAction } from '../../Provider';
import { isEnglish } from '../../../utils';
import { MAX_NAME_LENGTH } from '../../../constants';

function CardOwnerNameInputContainer() {
  const { name } = useAppState();
  const dispatch = useAppDispatch();

  const handleInsert = (input: HTMLInputElement) => {
    const { value, selectionStart } = input;
    if (selectionStart === null) return;
    const insertedChar = value[selectionStart - 1];

    // value의 총 길이는 30을 넘으면 안 된다
    if (value.length > MAX_NAME_LENGTH) return false;
    // 영어와 스페이스바만 입력 가능하다
    if (!isEnglish(insertedChar) && insertedChar !== ' ') return false;

    const newVal = value.replace(/ {2,}/g, ' ').toUpperCase();

    queueMicrotask(() => {
      input.setSelectionRange(selectionStart, selectionStart);
    });
    dispatch(createAction(ActionType.INPUT_NAME, newVal));
    return;
  };
  const handleDelete = (input: HTMLInputElement) => {
    const { value, selectionStart } = input;
    if (selectionStart === null) return;

    queueMicrotask(() => {
      input.setSelectionRange(selectionStart, selectionStart);
    });
    dispatch(createAction(ActionType.INPUT_NAME, value.toUpperCase()));
  };
  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { value, selectionStart } = input;
    if (selectionStart === null) return;

    if (name.length < value.length) {
      return handleInsert(input);
    }
    handleDelete(input);
  };

  return <CardOwnerNameInput onChange={handleChage} value={name} />;
}

export default CardOwnerNameInputContainer;
