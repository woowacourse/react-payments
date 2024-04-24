import React, { useState } from "react"
import OPTION from "../constants/option";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage";

interface UseCardNumbersFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const initializeInputFieldState = (length: number) => {
  const obj: InputStates = [];
  for (let i = 0; i < length; i++) {
    obj[i] = {
      hasError: false,
      hasFocus: i === 0,
    };
  }
  return obj;
};

const useCardNumbersFormSection = (props: UseCardNumbersFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const [inputState, setInputState] = useState(initializeInputFieldState(OPTION.cardNumberInputCount));

  const checkBrand = (inputValue: string) => {
    if (REGEX.visaCard.test(inputValue)) {
      dispatchCardInfo({ type: 'SET_CARD_BRAND_VALUE', value: 'Visa' })
    } else if (REGEX.masterCard.test(inputValue)) {
      dispatchCardInfo({ type: 'SET_CARD_BRAND_VALUE', value: 'MasterCard' })
    } else {
      dispatchCardInfo({ type: 'SET_CARD_BRAND_VALUE', value: 'none' })
    }
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = event.target.value;
    const newNumbers = [...cardInfo.cardNumbers.value]

    if (!REGEX.numbers.test(inputValue)) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          hasError: true,
        }
      }))
      dispatchCardInfo({ type: 'SET_CARD_NUMBERS_ERROR_MESSAGE', value: ERROR_MESSAGE.onlyNumber });
      newNumbers[index] = inputValue.slice(0, -1)
      dispatchCardInfo({ type: 'SET_CARD_NUMBERS_VALUE', value: newNumbers })
    } else {
      resetErrors();
      newNumbers[index] = inputValue
      dispatchCardInfo({ type: 'SET_CARD_NUMBERS_VALUE', value: newNumbers })
    }
    if (index === 0) checkBrand(newNumbers[0]);

  }

  const handleOnFocus = (index: number) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: true,
      },
    }));

    resetErrors();
  };

  const handleOnBlur = (index: number) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: false,
      },
    }));

    if (checkHasNoFocus()) {
      resetErrors();
      handleValidate();
    }
  };

  const checkHasNoFocus = () => {
    return Object.values(inputState).every((field) => !field.hasFocus);
  }

  const handleValidate = () => {
    if (cardInfo.cardNumbers.value.reduce((prev, current) => prev + current, '') === '') return

    let hasAnyError = false;

    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = cardInfo.cardNumbers.value[Number(key)];
      if (field.length !== OPTION.cardNumberMaxLength) {
        acc[Number(key)] = { ...acc[Number(key)], hasError: true };
        hasAnyError = true;
      } else {
        acc[Number(key)] = { ...acc[Number(key)], hasError: false };
      }
      return acc;
    }, []);

    setInputState(newState);

    if (hasAnyError) {
      dispatchCardInfo({ type: 'SET_CARD_NUMBERS_ERROR_MESSAGE', value: ERROR_MESSAGE.cardNumberOutOfRange });
    } else {
      dispatchCardInfo({ type: 'SET_CARD_NUMBERS_ERROR_MESSAGE', value: '' });
      dispatchCardInfo({ type: 'SET_CARD_NUMBERS_COMPLETED', value: true })
    }
  };

  const resetErrors = () => {
    const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
      const field = inputState[Number(key)];
      acc[Number(key)] = { ...field, hasError: false };
      return acc;
    }, []);

    setInputState(newState);

    dispatchCardInfo({ type: 'SET_CARD_NUMBERS_ERROR_MESSAGE', value: '' });
  };

  return [inputState, onChange, handleOnFocus, handleOnBlur] as const
}

export default useCardNumbersFormSection;