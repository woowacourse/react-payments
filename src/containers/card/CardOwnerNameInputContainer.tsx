import React from 'react';
import { css } from '@emotion/react';
import { useAppDispatch, useAppState } from 'hooks/hooks';
import { MAX_NAME_LENGTH } from '../../constants';
import { isEnglish } from 'utils';
import { createAction } from 'context/Provider';
import { ActionType } from 'types';
import CardFormInput from 'components/card/CardFormInput';

const style = css({
  height: '45px',
  width: '100%',
  borderRadius: '7px',
  maxWidth: '318px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '18px',
  textAlign: 'center',
  '&:focus': {
    boxShadow: 'none',
  },
});

function CardOwnerNameInputContainer() {
  const { name } = useAppState();
  const dispatch = useAppDispatch();

  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { value, selectionStart } = input;

    if (selectionStart === null) return;

    // 입력하는 경우
    if (name.length < value.length) {
      // value의 총 길이는 30을 넘으면 안 된다
      if (value.length > MAX_NAME_LENGTH) return;

      const insertedChar = value[selectionStart - 1];
      // space인데
      if (insertedChar === ' ') {
        // 처음부터 space는 허용 안되지요
        if (value.length === 1) return;

        // 왼쪽에 스페이스바가 있으면 그것도 안되지요
        if (value[selectionStart - 2] === ' ') return;

        // 오른쪽에 스페이스바가 있으면 그것도 안되지요
        if (value[selectionStart] === ' ') return;
      }

      // 영어하고 space만 입력 가능하다
      if (!isEnglish(insertedChar) && insertedChar !== ' ') return;

      // 대문자로 변환을 해준다
      const upperName = value.toUpperCase();
      queueMicrotask(() => {
        input.setSelectionRange(selectionStart, selectionStart);
      });
      // name을 업데이트 한다
      dispatch(createAction(ActionType.INPUT_NAME, upperName));
      return;
    }

    // 지우는 경우
    queueMicrotask(() => {
      input.setSelectionRange(selectionStart, selectionStart);
    });
    dispatch(createAction(ActionType.INPUT_NAME, value.toUpperCase()));
  };

  return (
    <>
      <CardFormInput
        type="text"
        onChange={handleChage}
        value={name}
        placeholder="카드에 표시될 이름을 작성해주세요."
        style={style}
      />
    </>
  );
}

export default CardOwnerNameInputContainer;
