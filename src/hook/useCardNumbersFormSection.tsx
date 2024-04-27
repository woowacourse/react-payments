import React, { useState } from "react"
import useMultiFormSection from "./useMultiFormSection"
import OPTION from "../constants/option";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage";
import { Mastercard } from "../stories/CardPreview.stories";

interface UseCardNumbersFormSectionProps {
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  refs: React.MutableRefObject<HTMLInputElement[]>
}

const useCardNumbersFormSection = (props: UseCardNumbersFormSectionProps) => {
  const { dispatchCardInfo, refs } = props;
  const [hasErrors, setHasErrors] = useState(new Array(refs.current.length).fill(false))
  const [error, setError] = useState('');

  const validateCardNumbers = (values: string[]) => {
    if (values.every(value => value.length === 0)) return
    const newHasErrors = [...hasErrors];
    let anyError = false;

    values.forEach((value, index) => {
      if (value.length !== OPTION.cardNumberMaxLength) {
        newHasErrors[index] = true;
        anyError = true;
      } else {
        newHasErrors[index] = false;
      }
    });

    setHasErrors(newHasErrors);

    if (anyError) {
      setError(ERROR_MESSAGE.cardNumberOutOfRange);
    } else {
      setError('');
      dispatchCardInfo({ type: 'SET_CARD_NUMBERS_COMPLETED', value: true })
    }
  };

  const dispatchCardNumbersAndBrand = (values: string[]) => {
    dispatchCardInfo({ type: 'SET_CARD_NUMBERS_VALUE', value: values })
    if (REGEX.masterCard.test(values[0])) {
      dispatchCardInfo({ type: 'SET_CARD_BRAND_VALUE', value: 'MasterCard' })
    } else if (REGEX.visaCard.test(values[0])) {
      dispatchCardInfo({ type: 'SET_CARD_BRAND_VALUE', value: 'Visa' })
    } else {
      dispatchCardInfo({ type: 'SET_CARD_BRAND_VALUE', value: 'none' })
    }
  }

  const { values, handleChange } = useMultiFormSection({
    refs: refs,
    initialValue: new Array(OPTION.cardNumberMaxLength).fill(''),
    regex: REGEX.numbers,
    errorMessage: ERROR_MESSAGE.onlyNumber,
    maxLength: OPTION.cardNumberMaxLength,
    dispatchCardInfo: dispatchCardNumbersAndBrand,
    setError: setError,
    hasErrors: hasErrors,
    setHasErrors: setHasErrors,
    validate: validateCardNumbers,
  });

  return { values, error, hasErrors, handleChange } as const
}

export default useCardNumbersFormSection;