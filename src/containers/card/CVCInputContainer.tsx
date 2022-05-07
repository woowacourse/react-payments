import React from 'react';
import { css } from '@emotion/react';
import { useAppDispatch, useAppState } from 'hooks/hooks';
import { createAction } from 'context/Provider';
import { ActionType } from 'types';
import { isNum, removeWhiteSpaces } from 'utils';
import CardFormInput from 'components/card/CardFormInput';

const style = css({
  maxWidth: '84px',
  height: '45px',
  marginRight: '11px',
});

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
        css={style}
      />
    </>
  );
}

export default CVCInputContainer;
