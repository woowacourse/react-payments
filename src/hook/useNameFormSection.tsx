import { useState } from "react";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"

interface UseNameFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
}

const useNameFormSection = (props: UseNameFormSectionProps) => {
  const { cardInfo, dispatchCardInfo } = props
  const [inputState, setInputState] = useState({ hasFocus: false, errorMessage: '' })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (!REGEX.name.test(inputValue) && inputValue.length !== 0) {
      setInputState({ ...inputState, errorMessage: ERROR_MESSAGE.onlyEnglish })
      dispatchCardInfo({ type: 'SET_CARD_NAME_VALUE', value: inputValue.slice(0, -1) })
    }
    else {
      setInputState({ ...inputState, errorMessage: '' })
      dispatchCardInfo({ type: 'SET_CARD_NAME_VALUE', value: inputValue })
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

    if (cardInfo.name.value.length !== 0) {
      dispatchCardInfo({ type: 'SET_CARD_NAME_COMPLETED', value: true })
    }
  };


  return [inputState, onChange, inputState.errorMessage, handleOnFocus, handleOnBlur] as const;
};

export default useNameFormSection;