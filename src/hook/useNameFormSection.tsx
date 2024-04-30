import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import useFormSection from "./useFormSection";
import OPTION from "../constants/option";

interface UseNameFormSectionProps {
  cardInfo: CardInfo
  updateCardInfo: (value: string) => void;
  onComplete: () => void;
  ref: React.MutableRefObject<HTMLInputElement>
}

const useNameFormSection = (props: UseNameFormSectionProps) => {
  const { cardInfo, updateCardInfo, onComplete, ref } = props

  const validateWhenChange = (value: string) => {
    if (!REGEX.name.test(value) && value.length !== 0) {
      return { errorMessage: ERROR_MESSAGE.onlyEnglish, newValue: value.split('').filter(char => REGEX.name.test(char)).join('') }
    };
    return { errorMessage: '', newValue: value }
  }

  const validateWhenBlur = (value: string) => {
    if (value.length !== 0) {
      return { errorMessage: '', complete: true }
    }
    return { errorMessage: '', complete: false }
  }

  const blurCondition = (value: string) => value.length === OPTION.nameMaxLength

  const { handleChange, error } = useFormSection({
    ref: ref,
    value: cardInfo.name.value,
    validateWhenChange,
    validateWhenBlur,
    blurCondition,
    updateCardInfo,
    onComplete,
  });

  return { error, handleChange };
}

export default useNameFormSection;
