import React from "react";
import useMultiFormSection from "./useMultiFormSection";
import useFocusNext from "./useFocusNext";
import REGEX from "../constants/regex";
import OPTION from "../constants/option";

interface UseExpirationDateFormSection {
  refs: React.MutableRefObject<HTMLInputElement[]>
  values: string[];
  updateValues: (values: string[]) => void;
  updateComplete: () => void;
  maxLength?: number
}

const useExpirationDateFormSection = ({ refs, values, updateValues, updateComplete, maxLength = OPTION.expirationDateMaxLength }: UseExpirationDateFormSection) => {
  const { focusNext } = useFocusNext(refs);

  const validateOnChange = (newValue: string, index?: number) => {
    if (!REGEX.numbers.test(newValue)) {
      return 'invalidInputType';
    }
    if (index === 0 && !/^$|^(0[1-9]|1[0-2]|0|1)$/.test(newValue)) return 'invalidMonth'
    if (newValue.length === maxLength) focusNext();
    return '';
  };

  const validateOnBlur = () => {
    return '';
  };

  const getIsExpired = () => {
    const nowDate = new Date();
    const year = nowDate.getFullYear().toString().slice(2, 4);
    const month = (nowDate.getMonth() + 1).toString().padStart(2, '0');
    const now = Number(year + month);
    const expireDate = Number(values[1] + values[0]);

    return now - expireDate > 0
  }

  const validateOnBlurAll = () => {
    if (values.join('').length === 0) return Array.from({ length: values.length }).fill('') as string[]
    return values.map((value) => {
      if (value.length !== maxLength) {

        return 'notEnoughLength';
      }
      if (getIsExpired()) {

        return 'expired';
      };

      return '';
    })
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
export default useExpirationDateFormSection;
