import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import useFormSection from "./useFormSection";
import { useState } from "react";

interface UseNameFormSectionProps {
  cardInfo: CardInfo
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  ref: React.MutableRefObject<HTMLInputElement>
}

const useNameFormSection = (props: UseNameFormSectionProps) => {
  const { cardInfo, dispatchCardInfo, ref } = props

  const { handleChange, error, setError } = useFormSection({
    value: cardInfo.name.value,
    ref: ref,
    regex: REGEX.name,
    errorMessage: ERROR_MESSAGE.onlyEnglish,
    dispatchCardInfo: (value: string) => dispatchCardInfo({ type: 'SET_CARD_NAME_VALUE', value }),
  });

  const validateName = (value: string) => {
    if (value.length !== 0) {
      dispatchCardInfo({ type: 'SET_CARD_NAME_COMPLETED', value: true })
    }
  }

  if (ref.current) {
    ref.current.onfocus = () => { setError('') };
    ref.current.onblur = () => {
      setError('')
      validateName(cardInfo.name.value)
    };
  }

  return { error, handleChange };
}

export default useNameFormSection;
