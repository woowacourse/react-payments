import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import useFormSection from "./useFormSection";

interface UseNameFormSectionProps {
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  ref: React.MutableRefObject<HTMLInputElement>
}

const useNameFormSection = (props: UseNameFormSectionProps) => {
  const { dispatchCardInfo, ref } = props
  const { value, error, handleChange } = useFormSection({
    ref: ref,
    initialValue: '',
    regex: REGEX.name,
    errorMessage: ERROR_MESSAGE.onlyEnglish,
    dispatchCardInfo: (value: string) => dispatchCardInfo({ type: 'SET_CARD_NAME_VALUE', value })
  });

  return { value, error, handleChange };
}

export default useNameFormSection;
