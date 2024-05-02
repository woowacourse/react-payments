import OPTION from "../constants/option";
import useFormSection from "./useFormSection";

interface UseCVCFormSectionProps {
  value: string;
  updateValue: (value: string) => void;
  updateComplete: () => void;
  maxLength?: number
}

const useCVCFormSection = ({ value, updateValue, updateComplete, maxLength = OPTION.cvcMaxLength }: UseCVCFormSectionProps) => {
  const validateOnChange = (newValue: string) => {
    if (newValue.length > maxLength) {
      return {
        isValid: false,
        errorMessage: `CVC 번호는 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (!/^\d*$/.test(newValue)) {
      return {
        isValid: false,
        errorMessage: 'CVC 번호는 숫자만 입력이 가능해요.',
      };
    }
    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = () => {
    if (value.length !== maxLength) {
      return {
        isValid: false,
        errorMessage: `CVC 번호는 ${maxLength}글자로 입력해 주세요.`,
      };
    }
    updateComplete();
    return { isValid: true, errorMessage: '' };
  };

  const {
    errorMessage,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  } = useFormSection({
    updateValue,
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
export default useCVCFormSection;
