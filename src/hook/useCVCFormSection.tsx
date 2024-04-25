import useFormSection from "./useFormSection";

import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";
import { useEffect, useState } from "react";

interface UseCVCFormSectionProps {
  dispatchCardInfo: React.Dispatch<CardInfoAction>;
  handleCardState: (cardState: CardState) => void;
  ref: React.MutableRefObject<HTMLInputElement>
}

const useCVCFormSection = (props: UseCVCFormSectionProps) => {
  const { dispatchCardInfo, handleCardState, ref } = props
  const [error, setError] = useState('')

  const validateCVC = (value: string) => {
    if (value.length === OPTION.cvcMaxLength) {
      dispatchCardInfo({ type: 'SET_CARD_CVC_COMPLETED', value: true })
    } else {
      setError(ERROR_MESSAGE.cvcFormat);
    }
  }

  useEffect(() => {
    handleCardState('back')
  }, [])

  const { value, handleChange } = useFormSection({
    ref: ref,
    initialValue: '',
    regex: REGEX.numbers,
    errorMessage: ERROR_MESSAGE.onlyNumber,
    maxLength: OPTION.cvcMaxLength,
    dispatchCardInfo: (value: string) => dispatchCardInfo({ type: 'SET_CARD_CVC_VALUE', value }),
    setError: setError,
  });

  if (ref.current) {
    ref.current.onfocus = () => {
      handleCardState('back')
      setError('');
    };
    ref.current.onblur = () => {
      handleCardState('front')
      setError('');
      validateCVC(value);
    };
  }

  return { value, error, handleChange };
};

export default useCVCFormSection;