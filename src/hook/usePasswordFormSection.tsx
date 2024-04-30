import useFormSection from "./useFormSection";

import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";

interface UsePasswordFormSectionProps {
  cardInfo: CardInfo
  updateCardInfo: (value: string) => void;
  onComplete: () => void;
  ref: React.MutableRefObject<HTMLInputElement>
}

const usePasswordFormSection = (props: UsePasswordFormSectionProps) => {
  const { cardInfo, updateCardInfo, onComplete, ref } = props

  const validateWhenChange = (value: string) => {
    if (!REGEX.numbers.test(value) && value.length !== 0) {
      return { errorMessage: ERROR_MESSAGE.onlyNumber, newValue: value.split('').filter(char => REGEX.numbers.test(char)).join('') }
    };
    return { errorMessage: '', newValue: value }
  }

  const validateWhenBlur = (value: string) => {
    if (value.length === OPTION.passwordMaxLength) {
      return { errorMessage: '', complete: true }
    } else {
      return { errorMessage: ERROR_MESSAGE.passwordFormat, complete: false };
    }
  }

  const blurCondition = (value: string) => value.length === OPTION.passwordMaxLength

  const { handleChange, error } = useFormSection({
    ref: ref,
    value: cardInfo.password.value,
    validateWhenChange,
    validateWhenBlur,
    blurCondition,
    updateCardInfo,
    onComplete,
  });

  return { error, handleChange };
};

export default usePasswordFormSection;