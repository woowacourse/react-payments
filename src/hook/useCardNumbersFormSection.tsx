import React from "react";
import useMultiFormSection from "./useMultiFormSection";
import useFocusNext from "./useFocusNext";
import OPTION from "../constants/option";
import REGEX from "../constants/regex";

// TODO: maxlength props
interface UseCardNumbersFormSection {
  refs: React.MutableRefObject<HTMLInputElement[]>
  values: string[];
  updateValues: (values: string[]) => void;
  updateComplete: () => void;
  maxLength?: number
}

const useCardNumbersFormSection = ({ refs, values, updateValues, updateComplete, maxLength = OPTION.cardNumberMaxLength }: UseCardNumbersFormSection) => {
  const { focusNext } = useFocusNext(refs);

  const validateOnChange = (newValue: string) => {
    if (!REGEX.numbers.test(newValue)) {
      return 'invalidInputType'
    }
    if (newValue.length === maxLength) focusNext();
    return '';
  };

  const validateOnBlur = () => {
    return '';
  };

  const validateOnBlurAll = () => {
    if (values.join('').length === 0) return Array.from({ length: values.length }).fill('') as string[]
    return values.map((value) => {
      if (value.length !== maxLength) {

        return 'notEnoughLength'
      }

      return ''
    });
  }

  const {
    errors,
    onChangeHandler,
    onFocusHandler,
    onBlurHandler,
  } = useMultiFormSection({
    refs,
    values,
    updateValues,
    updateComplete,
    validateOnChange,
    validateOnBlur,
    validateOnBlurAll,
  });

  return {
    errors,
    onChangeHandler,
    onBlurHandler,
    onFocusHandler,
  };
};
export default useCardNumbersFormSection;
