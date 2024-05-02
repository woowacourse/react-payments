import useFormSection from "./useFormSection";
import OPTION from "../constants/option";

interface UseNameFormSectionProps {
  ref: React.MutableRefObject<HTMLInputElement>,
  value: string;
  updateValue: (value: string) => void;
  updateComplete: () => void;
  maxLength?: number
}
const useNameFormSection = ({ ref, value, updateValue, updateComplete, maxLength = OPTION.nameMaxLength }: UseNameFormSectionProps) => {
  const validateOnChange = (newValue: string) => {
    if (newValue.length > maxLength) {
      return {
        isValid: false,
        errorMessage: `이름은 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (!/^([a-zA-Z]+ ?)*[a-zA-Z]*$/.test(newValue)) {
      return {
        isValid: false,
        errorMessage: '이름은 사이에 공백이 들어간 영문자만 입력이 가능해요.',
      };
    }

    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = () => {
    if (value.length !== 0) {
      return { isValid: true, errorMessage: '' };
    }
    return { isValid: false, errorMessage: '' };
  };

  const {
    errorMessage,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  } = useFormSection({
    updateValue,
    updateComplete,
    validateOnChange,
    validateOnBlur,
  });

  return {
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useNameFormSection;
