import useFormSection from "./useFormSection";

import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage"
import OPTION from "../constants/option";

interface UseCVCFormSectionProps {
  dispatchCardInfo: React.Dispatch<CardInfoAction>;
  handleCardState: (cardState: CardState) => void;
  ref: React.MutableRefObject<HTMLInputElement>
}

const useCVCFormSection = (props: UseCVCFormSectionProps) => {
  const { dispatchCardInfo, handleCardState, ref } = props
  const { value, error, handleChange } = useFormSection({
    ref: ref,
    initialValue: '',
    regex: REGEX.numbers,
    errorMessage: ERROR_MESSAGE.onlyNumber,
    maxLength: OPTION.cvcMaxLength,
    dispatchCardInfo: (value: string) => dispatchCardInfo({ type: 'SET_CARD_CVC_VALUE', value })
  });

  if (ref.current) {
    ref.current.onfocus = () => { handleCardState('back') };
    ref.current.onblur = () => { handleCardState('front') };
  }

  return { value, error, handleChange };
};

export default useCVCFormSection;