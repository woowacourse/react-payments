import React from 'react';

import CardFormInput from 'components/card/CardFormInput';

import { useAppDispatch, useAppState } from 'hooks';
import { createAction } from 'context/Provider';
import { ActionType } from 'types';
import { isNum, removeWhiteSpaces } from 'utils';

function CVCInputContainer() {
  const { cvc } = useAppState();
  const dispatch = useAppDispatch();

  const handleChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (cvc.length === 1 && value.length < cvc.length) {
      dispatch(createAction(ActionType.INPUT_CVC, ''));
      return;
    }

    if (value.length > 3 || !isNum(value)) return;

    dispatch(createAction(ActionType.INPUT_CVC, removeWhiteSpaces(value)));
  };

  return (
    <>
      <CardFormInput
        type="password"
        onChange={handleChage}
        value={cvc}
        placeholder="000"
        maxlength="3"
        pattern="^[0-9]{3}$"
        required={true}
        width="60px"
        height="50px"
      />
    </>
  );
}

export default CVCInputContainer;
