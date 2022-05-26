import React, { useRef } from 'react';

import CardFormInput from 'components/card/CardFormInput';

import { useAppDispatch, useAppState } from 'hooks/hooks';
import { createAction } from 'context/Provider';
import { ActionType } from 'types';

function CardPasswordInputContainer() {
  const { firstPassword, secondPassword } = useAppState();
  const dispatch = useAppDispatch();

  const secondPasswordInputRef = useRef<HTMLInputElement>(null);

  const handleFirstPasswordInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    if (value.length > 1) return;

    if (value.length === 1) {
      secondPasswordInputRef.current?.focus();
    }

    dispatch(createAction(ActionType.FIRST_INPUT_PASSWORD, value));
  };

  const handleSecondPasswordInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;

    if (value.length > 1) return;

    dispatch(createAction(ActionType.SECOND_INPUT_PASSWORD, value));
  };

  return (
    <>
      <CardFormInput
        type="password"
        onChange={handleFirstPasswordInput}
        value={firstPassword}
        placeholder="0"
        maxlength="1"
        pattern="^[0-9]{1}$"
        required={true}
        width="60px"
        height="50px"
        ref={secondPasswordInputRef}
      />
      <CardFormInput
        type="password"
        onChange={handleSecondPasswordInput}
        value={secondPassword}
        placeholder="0"
        maxlength="1"
        pattern="^[0-9]{1}$"
        required={true}
        width="60px"
        height="50px"
        ref={secondPasswordInputRef}
      />
      <CardFormInput placeholder="•" disabled={true} width="60px" height="50px" />
      <CardFormInput placeholder="•" disabled={true} width="60px" height="50px" />
    </>
  );
}

export default CardPasswordInputContainer;
