import React, { useRef } from 'react';
import { css } from '@emotion/react';
import { useAppDispatch, useAppState } from 'hooks/hooks';
import { createAction } from 'context/Provider';
import { ActionType } from 'types';
import CardFormInput from 'components/card/CardFormInput';

const style = css({
  width: '43px',
  height: '45px',
  marginRight: '7px',
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
        maxlength="1"
        pattern="^[0-9]{1}$"
        required={true}
        css={style}
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
        css={style}
        ref={secondPasswordInputRef}
      />
      <CardFormInput placeholder="•" disabled={true} css={style} />
      <CardFormInput placeholder="•" disabled={true} css={style} />
    </>
  );
}

export default CardPasswordInputContainer;
