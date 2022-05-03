import React, { useRef } from 'react';
import { useAppDispatch, useAppState } from '../../../hooks/hooks';
import { ActionType } from '../../../types';
import { isNum, removeWhiteSpaces } from '../../../utils';
import { createAction } from '../../../context/Provider';
import CardFormInput from '../CardFormInput';
import { css } from '@emotion/react';

const style = css({
  height: '47px',
  width: '100%',
  border: 'none',
  maxWidth: '70px',
  outline: 'none !important',
  fontSize: '18px',
  textAlign: 'center',
  '&:focus': {
    boxShadow: 'none',
  },
});

function CardNumberInputContainer() {
  const {
    firstInputCardNumber,
    secondInputCardNumber,
    thirdInputCardNumber,
    fourthInputCardNumber,
  } = useAppState();
  const dispatch = useAppDispatch();

  const firstNumberInputRef = useRef<HTMLInputElement>(null);
  const secondNumberInputRef = useRef<HTMLInputElement>(null);
  const thirdNumberInputRef = useRef<HTMLInputElement>(null);
  const fourthnumberInputRef = useRef<HTMLInputElement>(null);

  const handleFirstInputCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { value } = input;

    if (firstInputCardNumber.length === 1 && value.length < firstInputCardNumber.length) {
      dispatch(createAction(ActionType.FIRST_INPUT_CARD_NUMBER, ''));
      return;
    }

    if (value.length > 4 || !isNum(value)) return;

    if (value.length === 4) secondNumberInputRef.current?.focus();

    dispatch(createAction(ActionType.FIRST_INPUT_CARD_NUMBER, removeWhiteSpaces(value)));
  };

  const handleSecondInputCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { value } = input;

    if (firstInputCardNumber.length === 1 && value.length < firstInputCardNumber.length) {
      dispatch(createAction(ActionType.FIRST_INPUT_CARD_NUMBER, ''));
      return;
    }

    if (value.length > 4 || !isNum(value)) return;

    if (value.length === 4) thirdNumberInputRef.current?.focus();

    dispatch(createAction(ActionType.SECOND_INPUT_CARD_NUMBER, removeWhiteSpaces(value)));
  };

  const handleThirdInputCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { value } = input;

    if (firstInputCardNumber.length === 1 && value.length < firstInputCardNumber.length) {
      dispatch(createAction(ActionType.FIRST_INPUT_CARD_NUMBER, ''));
      return;
    }

    if (value.length > 4 || !isNum(value)) return;

    if (value.length === 4) fourthnumberInputRef.current?.focus();

    dispatch(createAction(ActionType.THIRD_INPUT_CARD_NUMBER, removeWhiteSpaces(value)));
  };

  const handleFourthInputCardNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target;
    const { value } = input;

    if (firstInputCardNumber.length === 1 && value.length < firstInputCardNumber.length) {
      dispatch(createAction(ActionType.FIRST_INPUT_CARD_NUMBER, ''));
      return;
    }

    if (value.length > 4 || !isNum(value)) return;

    dispatch(createAction(ActionType.FOURTH_INPUT_CARD_NUMBER, removeWhiteSpaces(value)));
  };

  return (
    <>
      <CardFormInput
        onChange={handleFirstInputCardNumber}
        value={firstInputCardNumber}
        style={style}
        ref={firstNumberInputRef}
      />
      -
      <CardFormInput
        onChange={handleSecondInputCardNumber}
        value={secondInputCardNumber}
        style={style}
        ref={secondNumberInputRef}
      />
      -
      <CardFormInput
        onChange={handleThirdInputCardNumber}
        value={thirdInputCardNumber}
        type="password"
        style={style}
        ref={thirdNumberInputRef}
      />
      -
      <CardFormInput
        type="password"
        onChange={handleFourthInputCardNumber}
        value={fourthInputCardNumber}
        style={style}
        ref={fourthnumberInputRef}
      />
    </>
  );
}

export default CardNumberInputContainer;
