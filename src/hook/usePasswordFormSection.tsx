import useFormSection from "./useFormSection";

import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";
import { useState } from "react";

interface UsePasswordFormSectionProps {
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  ref: React.MutableRefObject<HTMLInputElement>
}

const usePasswordFormSection = (props: UsePasswordFormSectionProps) => {
  const { dispatchCardInfo, ref } = props
  const [error, setError] = useState('')

  const validatePassword = (value: string) => {
    if (value.length === OPTION.passwordMaxLength) {
      dispatchCardInfo({ type: 'SET_CARD_PASSWORD_COMPLETED', value: true })
    } else {
      setError(ERROR_MESSAGE.passwordFormat);
    }
  }

  const { value, handleChange } = useFormSection({
    ref: ref,
    initialValue: '',
    regex: REGEX.numbers,
    errorMessage: ERROR_MESSAGE.onlyNumber,
    maxLength: OPTION.passwordMaxLength,
    dispatchCardInfo: (value: string) => dispatchCardInfo({ type: 'SET_CARD_PASSWORD_VALUE', value }),
    setError: setError
  });

  if (ref.current) {
    ref.current.onfocus = () => {
      setError('');
    };
    ref.current.onblur = () => {
      setError('');
      validatePassword(value);
    };
  }

  return { value, error, handleChange };
};

export default usePasswordFormSection;