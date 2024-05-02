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

  const validateOnChange = (index: number, newValue: string) => {
    if (!/^\d*$/.test(newValue)) {
      return {
        isValid: false,
        errorMessage: '유효기간은 숫자만 입력이 가능해요.',
      };
    }
    if (index === 0 && !/^$|^(0[1-9]|1[0-2]|0|1)$/.test(newValue))
      return {
        isValid: false,
        errorMessage: '유효기간 월은 01~12 사이만 입력이 가능해요.',
      };
    if (newValue.length === maxLength) focusNext();
    return { isValid: true, errorMessage: '' };
  };

  const validateOnBlur = (index: number) => {
    return { isValid: true, errorMessage: '' }
  };

  const validateOnBlurAll = () => {
    const nowDate = new Date();
    const year = nowDate.getFullYear().toString().slice(2, 4);
    const month = (nowDate.getMonth() + 1).toString().padStart(2, '0');
    const now = Number(year + month);
    const expireDate = Number(values[1] + values[0]);

    const result: number[] = []
    values.forEach((value, index) => {
      if (value.length !== maxLength) {
        result.push(index)
      }
    })
    if (values.join('').length !== values.length * maxLength) {
      return {
        indexList: result,
        isValid: false,
        errorMessage: `유효기간은 MM / YY 형식의 4자리로 입력해 주세요.`,
      };
    }

    if (now - expireDate > 0) {
      return {
        indexList: [0, 1],
        isValid: false,
        errorMessage: `만료된 카드입니다.`,
      };
    }
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
    updateComplete,
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
export default useExpirationDateFormSection;
