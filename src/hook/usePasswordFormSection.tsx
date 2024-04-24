import { useEffect, useState } from "react";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";

interface UsePasswordFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  ref: React.MutableRefObject<HTMLInputElement>
}

const usePasswordFormSection = (props: UsePasswordFormSectionProps) => {
  const { cardInfo, dispatchCardInfo, ref } = props

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = cardInfo.password.value + event.target.value.slice(event.target.value.length - 1, event.target.value.length)

    if (!REGEX.numbers.test(inputValue) && inputValue.length !== 0) {
      dispatchCardInfo({ type: 'SET_CARD_PASSWORD_ERROR_MESSAGE', value: ERROR_MESSAGE.onlyNumber })
      dispatchCardInfo({ type: 'SET_CARD_PASSWORD_VALUE', value: inputValue.slice(0, -1) })
    }
    else {
      dispatchCardInfo({ type: 'SET_CARD_PASSWORD_ERROR_MESSAGE', value: '' })
      dispatchCardInfo({ type: 'SET_CARD_PASSWORD_VALUE', value: inputValue })
    }
  }

  useEffect(() => {
    if (ref.current.value.length === OPTION.passwordMaxLength) {
      handleValidate();
    }
  }, [cardInfo.password.value])

  const handleOnFocus = () => {
    resetError();
  };

  const handleOnBlur = () => {
    resetError();
    handleValidate();
  }

  const handleValidate = () => {
    if (cardInfo.password.value.length === OPTION.passwordMaxLength) {
      dispatchCardInfo({ type: 'SET_CARD_PASSWORD_COMPLETED', value: true })
    } else {
      dispatchCardInfo({ type: 'SET_CARD_PASSWORD_ERROR_MESSAGE', value: ERROR_MESSAGE.passwordFormat })
    }
  };

  const resetError = () => {
    dispatchCardInfo({ type: 'SET_CARD_PASSWORD_ERROR_MESSAGE', value: '' })
  }


  return [onChange, handleOnFocus, handleOnBlur] as const;
};

export default usePasswordFormSection;