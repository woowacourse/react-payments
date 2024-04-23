import React, { useState } from "react"
import OPTION from "../constants/option";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage";
import { startsWithNumberRegex } from "../util/startsWithNumberRegex";

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
  const [errorMessage, setErrorMessage] = useState('');

  const checkBrand = (inputValue: string) => {
    if (REGEX.visaCard.test(inputValue)) {
      dispatchCardInfo({ type: 'SET_CARD_BRAND_VALUE', value: 'Visa' })
    } else if (REGEX.masterCard.test(inputValue)) {
      dispatchCardInfo({ type: 'SET_CARD_BRAND_VALUE', value: 'MasterCard' })
    } else {
      dispatchCardInfo({ type: 'SET_CARD_BRAND_VALUE', value: 'none' })
    }

    console.log(cardInfo.cardBrand.value)
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const inputValue = event.target.value;
    const newNumbers = [...cardInfo.cardNumbers.value]
    if (index === 0) checkBrand(inputValue);

    if (!REGEX.numbers.test(inputValue)) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          hasError: true,
        }
      }))
      setErrorMessage(ERROR_MESSAGE.onlyNumber);
      newNumbers[index] = inputValue.slice(0, -1)
      dispatchCardInfo({ type: 'SET_CARD_NUMBERS_VALUE', value: newNumbers })
    } else {
      resetErrors();
      newNumbers[index] = inputValue
      dispatchCardInfo({ type: 'SET_CARD_NUMBERS_VALUE', value: newNumbers })
    }
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
      setErrorMessage(ERROR_MESSAGE.cardNumberOutOfRange);
    } else {
      setErrorMessage('');
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

    setErrorMessage('');
  };

  return [inputState, onChange, errorMessage, handleOnFocus, handleOnBlur] as const
}

export default useCardNumbersFormSection;