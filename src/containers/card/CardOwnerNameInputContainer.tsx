import React from 'react';

import CardFormInput from 'components/card/CardFormInput';

import { useAppDispatch, useAppState } from 'hooks';
import { removeWhiteSpaces } from 'utils';
import { createAction } from 'context/Provider';
import { ActionType } from 'types';

function CardOwnerNameInputContainer() {
  const { name } = useAppState();
  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { value } = input;
    const upperName = value.toUpperCase();

    dispatch(createAction(ActionType.INPUT_NAME, removeWhiteSpaces(upperName)));
  };

  return (
    <CardFormInput
      type="text"
      onChange={handleChange}
      value={name}
      placeholder="카드에 표시될 이름을 작성해주세요."
      maxlength="2"
      pattern="^[A-Z]{30}$"
      required={true}
      width="300px"
      height="50px"
    />
  );
}

export default CardOwnerNameInputContainer;
