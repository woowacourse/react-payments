import React from "react";
import useMultiFormSection from "./useMultiFormSection";
import useFocusNext from "./useFocusNext";
import OPTION from "../constants/option";

interface UseCardNumbersFormSection {
  refs: React.MutableRefObject<HTMLInputElement[]>
  values: string[];
  updateValues: (values: string[]) => void;
  updateComplete: () => void;
  maxLength?: number
}

const useCardNumbersFormSection = ({ refs, values, updateValues, updateComplete, maxLength = OPTION.cardNumberMaxLength }: UseCardNumbersFormSection) => {
  const { focusNext } = useFocusNext(refs);

  const validateOnChange = (index: number, newValue: string) => {
    if (!/^\d*$/.test(newValue)) {
      return {
        isValid: false,
        errorMessage: '카드번호는 숫자만 입력이 가능해요.',
      };
    }
    if (newValue.length === maxLength) focusNext();
    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = (index: number) => {
    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlurAll = () => {
    const result: number[] = []
    values.forEach((value, index) => {
      if (value.length !== maxLength) {
        result.push(index)
      }
    })
    if (result.length !== 0) {
      return {
        indexList: result,
        isValid: false,
        errorMessage: `카드번호는 ${maxLength * values.length}글자로 입력해 주세요.`,
      };
    }
    updateComplete();
    return { indexList: result, isValid: true, errorMessage: '' };
  }

  const {
    hasErrors,
    errorMessage,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  } = useMultiFormSection({
    refs,
    values,
    updateValues,
    validateOnChange,
    validateOnBlur,
    validateOnBlurAll,
  });

  return {
    hasErrors,
    errorMessage,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useCardNumbersFormSection;
