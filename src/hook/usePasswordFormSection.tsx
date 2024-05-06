import OPTION from "../constants/option";
import useFormSection from "./useFormSection";

interface UsePasswordFormSection {
  ref: React.MutableRefObject<HTMLInputElement>;
  value: string;
  updateValue: (value: string) => void;
  updateComplete: () => void;
  maxLength?: number
}

const usePasswordFormSection = ({ ref, value, updateValue, updateComplete, maxLength = OPTION.cvcMaxLength }: UsePasswordFormSection) => {
  const validateOnChange = (newValue: string) => {
    if (newValue.length > maxLength) {
      return {
        isValid: false,
        errorMessage: `비밀번호는 ${maxLength}글자 까지만 입력이 가능해요.`,
      };
    }
    if (!/^\d*$/.test(newValue)) {
      return {
        isValid: false,
        errorMessage: '비밀번호는 숫자만 입력이 가능해요.',
      };
    }
    if (newValue.length === maxLength) {
      ref.current.blur();
    }

    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = () => {
    if (value.length !== maxLength) {
      return {
        isValid: false,
        errorMessage: `비밀번호는 ${maxLength}글자로 입력해 주세요.`,
      };
    }
    return { isValid: true, errorMessage: '' };
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
export default usePasswordFormSection;
