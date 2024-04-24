import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";
import { useEffect } from "react";

interface UseCVCFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>;
  handleCardState: (cardState: CardState) => void;
  ref: React.MutableRefObject<HTMLInputElement>
}

const useCVCFormSection = (props: UseCVCFormSectionProps) => {
  const { cardInfo, dispatchCardInfo, handleCardState, ref } = props

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (!REGEX.numbers.test(inputValue) && inputValue.length !== 0) {
      dispatchCardInfo({ type: 'SET_CARD_CVC_ERROR_MESSAGE', value: ERROR_MESSAGE.onlyNumber })
      dispatchCardInfo({ type: 'SET_CARD_CVC_VALUE', value: inputValue.slice(0, -1) })
    }
    else {
      dispatchCardInfo({ type: 'SET_CARD_CVC_ERROR_MESSAGE', value: '' })
      dispatchCardInfo({ type: 'SET_CARD_CVC_VALUE', value: inputValue })
    }
  }

  useEffect(() => {
    if (ref.current.value.length === OPTION.cvcMaxLength) {
      handleValidate();
    }
  }, [cardInfo.cvc.value])

  const handleOnFocus = () => {
    resetError()
    handleCardState('back')
  };

  const handleOnBlur = () => {
    resetError();
    handleValidate();

    handleCardState('front')
  };

  const handleValidate = () => {
    if (cardInfo.cvc.value.length === OPTION.cvcMaxLength) {
      dispatchCardInfo({ type: 'SET_CARD_CVC_COMPLETED', value: true })
    } else {
      dispatchCardInfo({ type: 'SET_CARD_CVC_ERROR_MESSAGE', value: ERROR_MESSAGE.cvcFormat })
    }
  }

  const resetError = () => {
    dispatchCardInfo({ type: 'SET_CARD_CVC_ERROR_MESSAGE', value: '' })
  }


  return [onChange, handleOnFocus, handleOnBlur] as const;
};

export default useCVCFormSection;