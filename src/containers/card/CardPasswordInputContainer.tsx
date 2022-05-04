import React, { useRef } from 'react';
import { css } from '@emotion/react';
import { useAppDispatch, useAppState } from 'hooks/hooks';
import { createAction } from 'context/Provider';
import { ActionType } from 'types';
import CardFormInput from 'components/card/CardFormInput';

const style = css({
  height: '45px',
  width: '43px',
  borderRadius: '7px',
  outline: 'none !important',
  border: 'inherit',
  fontSize: '21px',
  textAlign: 'center',
  marginRight: '7px',
  '&:focus': {
    boxShadow: 'none',
  },
  '&:disabled': {
    backgroundColor: 'white',
  },
});

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
        style={style}
        ref={secondPasswordInputRef}
      />
      <CardFormInput
        type="password"
        onChange={handleSecondPasswordInput}
        value={secondPassword}
        placeholder="0"
        style={style}
        ref={secondPasswordInputRef}
      />
      <CardFormInput placeholder="•" disabled={true} style={style} />
      <CardFormInput placeholder="•" disabled={true} style={style} />
    </>
  );
}

export default CardPasswordInputContainer;
