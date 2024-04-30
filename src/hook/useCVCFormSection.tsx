import useFormSection from "./useFormSection";

import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";
import { useEffect } from "react";

interface UseCVCFormSectionProps {
  cardInfo: CardInfo;
  updateCardInfo: (value: string) => void;
  onComplete: () => void;
  handleCardState: (cardState: CardState) => void;
  ref: React.MutableRefObject<HTMLInputElement>
}

const useCVCFormSection = (props: UseCVCFormSectionProps) => {
  const { cardInfo, updateCardInfo, onComplete, handleCardState, ref } = props

  const validateWhenChange = (value: string) => {
    if (!REGEX.numbers.test(value) && value.length !== 0) {
      return { errorMessage: ERROR_MESSAGE.onlyNumber, newValue: value.split('').filter(char => REGEX.numbers.test(char)).join('') }
    };
    return { errorMessage: '', newValue: value }
  }

  const validateWhenBlur = (value: string) => {
    if (value.length === OPTION.cvcMaxLength) {
      return { errorMessage: '', complete: true }
    } else {
      return { errorMessage: ERROR_MESSAGE.cvcFormat, complete: false };
    }
  }

  const blurCondition = (value: string) => value.length === OPTION.cvcMaxLength

  const { handleChange, error } = useFormSection({
    ref: ref,
    value: cardInfo.cvc.value,
    validateWhenChange,
    validateWhenBlur,
    blurCondition,
    updateCardInfo,
    onComplete,
  });

  useEffect(() => {
    handleCardState('back')

    if (ref.current) {
      ref.current.addEventListener('focus', () => handleCardState('back'))
      ref.current.addEventListener('blur', () => handleCardState('front'))
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener('focus', () => handleCardState('back'))
        ref.current.removeEventListener('blur', () => handleCardState('front'))
      }
    }
  }, [])


  return { error, handleChange };
};

export default useCVCFormSection;