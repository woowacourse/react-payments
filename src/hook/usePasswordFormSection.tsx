import useFormSection from "./useFormSection";

import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";

interface UsePasswordFormSectionProps {
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  ref: React.MutableRefObject<HTMLInputElement>
}

const usePasswordFormSection = (props: UsePasswordFormSectionProps) => {
  const { dispatchCardInfo, ref } = props
  const { value, error, handleChange } = useFormSection({
    ref: ref,
    initialValue: '',
    regex: REGEX.numbers,
    errorMessage: ERROR_MESSAGE.onlyNumber,
    maxLength: OPTION.passwordMaxLength,
    dispatchCardInfo: (value: string) => dispatchCardInfo({ type: 'SET_CARD_PASSWORD_VALUE', value })
  });

  return { value, error, handleChange };
};

export default usePasswordFormSection;