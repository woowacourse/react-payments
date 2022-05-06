import { useEffect, useState } from 'react';
import useInputValue from '../../hooks/useInputValue';
import FieldSet from '../FieldSet';
import CardNumberInput from '../Input/CardNumberInput';
import { checkCardNumber, checkNumberOnly } from '../../validation';
import { useCardFormContext } from '../../context/card-form-context';

const CardNumber = () => {
  const { dispatch } = useCardFormContext();
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

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(
      isFirstCardNumberError ||
        isSecondCardNumberError ||
        isThirdCardNumberError ||
        isFourthCardNumberError,
    );
  }, [
    isFirstCardNumberError,
    isSecondCardNumberError,
    isThirdCardNumberError,
    isFourthCardNumberError,
  ]);
  useEffect(() => {
    const isInputCompleted =
      firstCardNumber.length > 0 &&
      secondCardNumber.length > 0 &&
      thirdCardNumber.length > 0 &&
      fourthCardNumber.length > 0 &&
      !isError;

    if (!isInputCompleted) {
      dispatch({ type: 'incomplete-input-card-numbers' });
      return;
    }

    dispatch({
      type: 'complete-input-card-numbers',
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
    isError,
    dispatch,
  ]);

  return (
    <FieldSet
      id="cardNumber"
      description="카드 번호"
      errorMessage="유효한 카드 번호를 입력하세요."
      isError={isError}
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
