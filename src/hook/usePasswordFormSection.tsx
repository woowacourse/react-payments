import useFormSection from "./useFormSection";

import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";
import { useState } from "react";

interface UsePasswordFormSectionProps {
  cardInfo: CardInfo
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  ref: React.MutableRefObject<HTMLInputElement>
}

const usePasswordFormSection = (props: UsePasswordFormSectionProps) => {
  const { cardInfo, dispatchCardInfo, ref } = props
  const [error, setError] = useState('')

  const { handleChange } = useFormSection({
    value: cardInfo.password.value,
    ref: ref,
    regex: REGEX.numbers,
    errorMessage: ERROR_MESSAGE.onlyNumber,
    maxLength: OPTION.passwordMaxLength,
    dispatchCardInfo: (value: string) => dispatchCardInfo({ type: 'SET_CARD_PASSWORD_VALUE', value }),
    setError: setError
  });

  const validatePassword = (value: string) => {
    if (value.length === OPTION.passwordMaxLength) {
      dispatchCardInfo({ type: 'SET_CARD_PASSWORD_COMPLETED', value: true })
    } else {
      setError(ERROR_MESSAGE.passwordFormat);
    }
  }

  if (ref.current) {
    ref.current.onfocus = () => {
      setError('');
    };
    ref.current.onblur = () => {
      setError('');
      validatePassword(cardInfo.password.value);
    };
  }

  return { error, handleChange };
};

export default usePasswordFormSection;