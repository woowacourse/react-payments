import { useReducer, useState } from "react";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";
import cardInfoReducer from "../store/cardInfoReducer";

interface UseCVCFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>;
  handleCardState: (cardState: CardState) => void;
}

const useCVCFormSection = (props: UseCVCFormSectionProps) => {
  const { cardInfo, dispatchCardInfo, handleCardState } = props
  // const [cardInfo, action] = useReducer(cardInfoReducer, )
  const [inputState, setInputState] = useState({ hasFocus: false, errorMessage: '' })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (!REGEX.numbers.test(inputValue) && inputValue.length !== 0) {
      setInputState({ ...inputState, errorMessage: ERROR_MESSAGE.onlyNumber })
      dispatchCardInfo({ type: 'SET_CARD_CVC_VALUE', value: inputValue.slice(0, -1) })
    }
    else {
      setInputState({ ...inputState, errorMessage: '' })
      dispatchCardInfo({ type: 'SET_CARD_CVC_VALUE', value: inputValue })
    }
  }

  const handleOnFocus = () => {
    setInputState({ ...inputState, hasFocus: true });

    setInputState({ ...inputState, errorMessage: '' })

    handleCardState('back')
  };

  const handleOnBlur = () => {
    setInputState({ ...inputState, hasFocus: false })

    if (!inputState.hasFocus) {
      setInputState({ ...inputState, errorMessage: '' })
    }

    if (cardInfo.cvc.value.length === OPTION.cvcMaxLength) {
      dispatchCardInfo({ type: 'SET_CARD_CVC_COMPLETED', value: true })
    }

    handleCardState('front')
  };


  return [inputState, onChange, inputState.errorMessage, handleOnFocus, handleOnBlur] as const;
};

export default useCVCFormSection;