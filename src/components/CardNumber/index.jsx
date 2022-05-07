import { useEffect, useState } from 'react';
import useInputValue from '../../hooks/useInputValue';
import FieldSet from '../FieldSet';
import CardNumberInput from '../Input/CardNumberInput';
import { checkCardNumber, checkNumberOnly } from '../../validation';
import { useCardFormContext, ACTION } from '../../context/card-form-context';

const CardNumber = () => {
  const { dispatch, state } = useCardFormContext();
  const [firstCardNumber, isFirstCardNumberError, onChangeFirstCardNumber] =
    useInputValue({
      isValidateInput: checkCardNumber,
      isInputAvailableValue: checkNumberOnly,
    });
  const [secondCardNumber, isSecondCardNumberError, onChangeSecondCardNumber] =
    useInputValue({
      isValidateInput: checkCardNumber,
      isInputAvailableValue: checkNumberOnly,
    });
  const [thirdCardNumber, isThirdCardNumberError, onChangeThirdCardNumber] =
    useInputValue({
      isValidateInput: checkCardNumber,
      isInputAvailableValue: checkNumberOnly,
    });
  const [fourthCardNumber, isFourthCardNumberError, onChangeFourthCardNumber] =
    useInputValue({
      isValidateInput: checkCardNumber,
      isInputAvailableValue: checkNumberOnly,
    });

  useEffect(() => {
    const isError =
      isFirstCardNumberError ||
      isSecondCardNumberError ||
      isThirdCardNumberError ||
      isFourthCardNumberError;
    if (!state.isCardNumberError && isError) {
      dispatch({ type: ACTION.CARD_NUMBERS_ERROR });
    }
  }, [
    state,
    dispatch,
    isFirstCardNumberError,
    isSecondCardNumberError,
    isThirdCardNumberError,
    isFourthCardNumberError,
  ]);

  useEffect(() => {
    const isError =
      isFirstCardNumberError ||
      isSecondCardNumberError ||
      isThirdCardNumberError ||
      isFourthCardNumberError;

    const isInputCompleted =
      firstCardNumber.length > 0 &&
      secondCardNumber.length > 0 &&
      thirdCardNumber.length > 0 &&
      fourthCardNumber.length > 0 &&
      !isError;

    if (!isInputCompleted) {
      return;
    }
    dispatch({
      type: ACTION.CARD_NUMBERS,
      data: {
        firstCardNumber,
        secondCardNumber,
        thirdCardNumber,
        fourthCardNumber,
      },
    });
  }, [
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
    dispatch,
    isFirstCardNumberError,
    isSecondCardNumberError,
    isThirdCardNumberError,
    isFourthCardNumberError,
  ]);

  return (
    <FieldSet
      id="cardNumber"
      description="카드 번호"
      errorMessage="유효한 카드 번호를 입력하세요."
      isError={
        isFirstCardNumberError ||
        isSecondCardNumberError ||
        isThirdCardNumberError ||
        isFourthCardNumberError
      }
    >
      {
        <CardNumberInput
          firstCardNumber={firstCardNumber}
          secondCardNumber={secondCardNumber}
          thirdCardNumber={thirdCardNumber}
          fourthCardNumber={fourthCardNumber}
          onChangeFirstCardNumber={onChangeFirstCardNumber}
          onChangeSecondCardNumber={onChangeSecondCardNumber}
          onChangeThirdCardNumber={onChangeThirdCardNumber}
          onChangeFourthCardNumber={onChangeFourthCardNumber}
        />
      }
    </FieldSet>
  );
};

export default CardNumber;
