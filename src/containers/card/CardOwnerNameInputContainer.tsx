import React from 'react';
import { css } from '@emotion/react';
import { useAppDispatch, useAppState } from 'hooks/hooks';
import { removeWhiteSpaces } from 'utils';
import { createAction } from 'context/Provider';
import { ActionType } from 'types';
import CardFormInput from 'components/card/CardFormInput';

const style = css({
  maxWidth: '318px',
  height: '45px',
});

function CardOwnerNameInputContainer() {
  const { name } = useAppState();
  const dispatch = useAppDispatch();

  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { value } = input;
    const upperName = value.toUpperCase();

    dispatch(createAction(ActionType.INPUT_NAME, removeWhiteSpaces(upperName)));
  };

  return (
    <>
      <CardFormInput
        type="text"
        onChange={handleChage}
        value={name}
        placeholder="카드에 표시될 이름을 작성해주세요."
        maxlength="2"
        pattern="^[A-Z]{30}$"
        required={true}
        css={style}
      />
    </>
  );
}

export default CardOwnerNameInputContainer;
