import { useState } from "react";
import OPTION from "../constants/option";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage";
import useMultiFormSection from "./useMultiFormSection";

interface UseExpirationFormSectionProps {
  cardInfo: CardInfo
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  refs: React.MutableRefObject<HTMLInputElement[]>
}

const nowDate = new Date();
const year = nowDate.getFullYear().toString().slice(2, 4);
const month = (nowDate.getMonth() + 1).toString().padStart(2, '0');
const now = year + month;

const useExpirationDateFormSection = (props: UseExpirationFormSectionProps) => {
  const { cardInfo, dispatchCardInfo, refs } = props;
  const [hasErrors, setHasErrors] = useState(new Array(refs.current.length).fill(false))
  const [error, setError] = useState('');

  const validateCardExpiration = (values: string[]) => {
    if (values.every(value => value.length === 0)) return
    const newHasErrors = [...hasErrors];
    let anyError = false;

    values.forEach((value, index) => {
      if (value.length !== OPTION.expirationDateMaxLength) {
        newHasErrors[index] = true;
        anyError = true;
      } else {
        newHasErrors[index] = false;
      }
    });

    setHasErrors(newHasErrors);

    if (anyError) {
      setError(ERROR_MESSAGE.expirationFormat);
    } else {
      validateExpired();
    }
  };

  const formatMonth = (values: string[]) => {
    // console.log(values)
    if (values[0].length === 0) return
    if (REGEX.oneToNine.test(values[0])) {
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_VALUE', value: ['0' + values[0], values[1]] })
    } else if (REGEX.zero.test(values[0])) {
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_VALUE', value: [OPTION.minMonth, values[1]] })
    } else if (
      !REGEX.month.test(values[0])
    ) {
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_VALUE', value: [OPTION.maxMonth, values[1]] })
    }
  };

  const { handleChange } = useMultiFormSection({
    values: cardInfo.expiration.value,
    refs: refs,
    regex: REGEX.numbers,
    errorMessage: ERROR_MESSAGE.onlyNumber,
    maxLength: OPTION.expirationDateMaxLength,
    dispatchCardInfo: (values: string[]) => dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_VALUE', value: values }),
    setError: setError,
    hasErrors: hasErrors,
    setHasErrors: setHasErrors,
    validate: validateCardExpiration,
  });

  const validateExpired = () => {
    const expireDate = +(cardInfo.expiration.value[1] + cardInfo.expiration.value[0]);
    const nowDate = +now;

    if (nowDate - expireDate > 0) {
      setHasErrors([true, true])
      setError(ERROR_MESSAGE.expiredCard)
    } else {
      setError('')
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_COMPLETED', value: true })
    }
  }

  return { error, hasErrors, handleChange } as const
}

export default useExpirationDateFormSection;