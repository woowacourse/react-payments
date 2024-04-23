import { useState } from "react";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";

interface UsePasswordFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const usePasswordFormSection = (props: UsePasswordFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const [inputState, setInputState] = useState({ hasFocus: false, errorMessage: '' })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(cardInfo.password.value, event.target.value.slice(event.target.value.length - 1, event.target.value.length));
    const inputValue = cardInfo.password.value + event.target.value.slice(event.target.value.length - 1, event.target.value.length)
    // const inputValue = event.target.value.length !== 0 ? password + event.target.value.slice(-1, 0) : event.target.value;

    if (!REGEX.numbers.test(inputValue) && inputValue.length !== 0) {
      setInputState({ ...inputState, errorMessage: ERROR_MESSAGE.onlyNumber })
      dispatchCardInfo({ type: 'SET_CARD_PASSWORD_VALUE', value: inputValue.slice(0, -1) })
    }
    else {
      setInputState({ ...inputState, errorMessage: '' })
      dispatchCardInfo({ type: 'SET_CARD_PASSWORD_VALUE', value: inputValue })
    }
  }

  const handleOnFocus = () => {
    setInputState({ ...inputState, hasFocus: true });

    setInputState({ ...inputState, errorMessage: '' })
  };

  const handleOnBlur = () => {
    setInputState({ ...inputState, hasFocus: false })

    if (!inputState.hasFocus) {
      setInputState({ ...inputState, errorMessage: '' })
    }

    if (cardInfo.password.value.length === OPTION.passwordMaxLength) {
      dispatchCardInfo({ type: 'SET_CARD_PASSWORD_COMPLETED', value: true })
    }
  };


  return [inputState, onChange, inputState.errorMessage, handleOnFocus, handleOnBlur] as const;
};

export default usePasswordFormSection;