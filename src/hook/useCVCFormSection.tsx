import useFormSection from "./useFormSection";

import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";
import { useEffect, useState } from "react";

interface UseCVCFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>;
  handleCardState: (cardState: CardState) => void;
  ref: React.MutableRefObject<HTMLInputElement>
}

const useCVCFormSection = (props: UseCVCFormSectionProps) => {
  const { cardInfo, dispatchCardInfo, handleCardState, ref } = props
  const [error, setError] = useState('')

  const { handleChange } = useFormSection({
    value: cardInfo.cvc.value,
    ref: ref,
    initialValue: '',
    regex: REGEX.numbers,
    errorMessage: ERROR_MESSAGE.onlyNumber,
    maxLength: OPTION.cvcMaxLength,
    dispatchCardInfo: (value: string) => dispatchCardInfo({ type: 'SET_CARD_CVC_VALUE', value }),
    setError: setError,
  });

  const validateCVC = (value: string) => {
    if (value.length === OPTION.cvcMaxLength) {
      dispatchCardInfo({ type: 'SET_CARD_CVC_COMPLETED', value: true })
    } else {
      setError(ERROR_MESSAGE.cvcFormat);
    }
  }

  if (ref.current) {
    ref.current.onfocus = () => {
      handleCardState('back')
      setError('');
    };
    ref.current.onblur = () => {
      handleCardState('front')
      setError('');
      validateCVC(cardInfo.cvc.value);
    };
  }

  useEffect(() => {
    handleCardState('back')
  }, [])


  return { error, handleChange };
};

export default useCVCFormSection;