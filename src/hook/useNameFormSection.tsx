import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import useFormSection from "./useFormSection";
import { useState } from "react";

interface UseNameFormSectionProps {
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  ref: React.MutableRefObject<HTMLInputElement>
}

const useNameFormSection = (props: UseNameFormSectionProps) => {
  const { dispatchCardInfo, ref } = props
  const [error, setError] = useState('')

  const validateName = (value: string) => {
    if (value.length !== 0) {
      dispatchCardInfo({ type: 'SET_CARD_NAME_COMPLETED', value: true })
    }
  }

  const { value, handleChange } = useFormSection({
    ref: ref,
    initialValue: '',
    regex: REGEX.name,
    errorMessage: ERROR_MESSAGE.onlyEnglish,
    dispatchCardInfo: (value: string) => dispatchCardInfo({ type: 'SET_CARD_NAME_VALUE', value }),
    setError: setError,
  });

  if (ref.current) {
    ref.current.onfocus = () => { setError('') };
    ref.current.onblur = () => {
      setError('')
      validateName(value)
    };
  }

  return { value, error, handleChange };
}

export default useNameFormSection;
