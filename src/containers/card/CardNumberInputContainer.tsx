import React, { useRef } from 'react';

import CardFormInput from 'components/card/CardFormInput';

import { useAppDispatch, useAppState } from 'hooks/hooks';
import { createAction } from 'context/Provider';
import { ActionType } from 'types';
import { isNum, removeWhiteSpaces } from 'utils';

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
        className="first-input-card-number"
        onChange={handleFirstInputCardNumber}
        value={firstInputCardNumber}
        placeholder="0000"
        maxlength="4"
        pattern="^[0-9]{4}$"
        required={true}
        width="60px"
        height="50px"
        ref={firstNumberInputRef}
      />
      <CardFormInput
        onChange={handleSecondInputCardNumber}
        value={secondInputCardNumber}
        placeholder="0000"
        maxlength="4"
        pattern="^[0-9]{4}$"
        required={true}
        width="60px"
        height="50px"
        ref={secondNumberInputRef}
      />
      <CardFormInput
        onChange={handleThirdInputCardNumber}
        value={thirdInputCardNumber}
        type="password"
        placeholder="0000"
        maxlength="4"
        pattern="^[0-9]{4}$"
        required={true}
        width="60px"
        height="50px"
        ref={thirdNumberInputRef}
      />
      <CardFormInput
        type="password"
        onChange={handleFourthInputCardNumber}
        value={fourthInputCardNumber}
        placeholder="0000"
        maxlength="4"
        pattern="^[0-9]{4}$"
        required={true}
        width="60px"
        height="50px"
        ref={fourthnumberInputRef}
      />
    </>
  );
}

export default CardNumberInputContainer;
