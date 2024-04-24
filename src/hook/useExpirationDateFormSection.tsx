import { useEffect, useState } from "react";
import OPTION from "../constants/option";
import REGEX from "../constants/regex";
import ERROR_MESSAGE from "../constants/errorMessage";
import useFocusNext from "./useFocusNext";

interface UseExpirationFormSectionProps {
  cardInfo: CardInfo;
  dispatchCardInfo: React.Dispatch<CardInfoAction>
  refs: React.MutableRefObject<HTMLInputElement[]>
}

interface ExpirationInputState {
  [key: string]: InputState;
  month: InputState;
  year: InputState;
}

type ExpirationInputType = 'month' | 'year'

const nowDate = new Date();
const year = nowDate.getFullYear().toString().slice(2, 4);
const month = (nowDate.getMonth() + 1).toString().padStart(2, '0');
const now = year + month;

const useExpirationDateFormSection = (props: UseExpirationFormSectionProps) => {
  const { cardInfo, dispatchCardInfo, refs } = props
  const [inputState, setInputState] = useState<ExpirationInputState>({ month: { hasError: false, hasFocus: false }, year: { hasError: false, hasFocus: false } });
  const { focusNext } = useFocusNext(refs);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, index: ExpirationInputType) => {
    const inputValue = event.target.value;

    if (!REGEX.numbers.test(inputValue)) {
      setInputState((prevState) => ({
        ...prevState,
        [index]: {
          ...prevState[index],
          hasError: true,
        }
      }))
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_ERROR_MESSAGE', value: ERROR_MESSAGE.onlyNumber })
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_VALUE', value: { ...cardInfo.expiration.value, [index]: inputValue.slice(0, -1) } })
    } else {
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_VALUE', value: { ...cardInfo.expiration.value, [index]: inputValue } })
    }
  }

  useEffect(() => {
    const focusedRef = refs.current.find((ref) => ref === document.activeElement);
    if (!focusedRef) return;
    if (focusedRef.value.length === OPTION.expirationDateMaxLength) {
      focusNext();
    }
    if (refs.current.every((ref) => ref.value.length === OPTION.expirationDateMaxLength)) {
      handleValidate();
    }
  }, [cardInfo.expiration.value])

  const handleOnFocus = (index: ExpirationInputType) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: true,
      },
    }));
    resetErrors();
  };

  const handleOnBlur = (index: ExpirationInputType) => {
    setInputState((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        hasFocus: false,
      },
    }));

    if (index === 'month') {
      formatMonth();
    }

    if (checkHasNoFocus()) {
      resetErrors();
      handleValidate();
    }
  };

  const formatMonth = () => {
    if (cardInfo.expiration.value.month.length === 0) return
    if (REGEX.oneToNine.test(cardInfo.expiration.value.month)) {
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_VALUE', value: { month: '0' + cardInfo.expiration.value.month, year: cardInfo.expiration.value.year } })
    } else if (REGEX.zero.test(cardInfo.expiration.value.month)) {
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_VALUE', value: { month: OPTION.minMonth, year: cardInfo.expiration.value.year } })
    } else if (
      !REGEX.month.test(cardInfo.expiration.value.month)
    ) {
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_VALUE', value: { month: OPTION.maxMonth, year: cardInfo.expiration.value.year } })
    }
  };

  const checkHasNoFocus = () => {
    return Object.values(inputState).every((field) => !field.hasFocus);
  }

  const validateExpired = () => {
    const expireDate = +(cardInfo.expiration.value.year + cardInfo.expiration.value.month);
    const nowDate = +now;

    if (nowDate - expireDate > 0) {
      setInputState({ month: { ...inputState.month, hasError: true }, year: { ...inputState.month, hasError: true } });
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_ERROR_MESSAGE', value: ERROR_MESSAGE.expiredCard })
    } else {
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_ERROR_MESSAGE', value: '' })
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_COMPLETED', value: true })
    }
  };

  const handleValidate = () => {
    if (cardInfo.expiration.value.month.length + cardInfo.expiration.value.year.length === 0) return
    let hasAnyError = false;

    if (cardInfo.expiration.value.month.length !== OPTION.expirationDateMaxLength) {
      setInputState({ ...inputState, month: { ...inputState[month], hasError: true } });
      hasAnyError = true;
    }
    if (cardInfo.expiration.value.year.length !== OPTION.expirationDateMaxLength) {
      setInputState({ ...inputState, year: { ...inputState[year], hasError: true } });
      hasAnyError = true;
    }

    if (hasAnyError) {
      dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_ERROR_MESSAGE', value: ERROR_MESSAGE.expirationFormat })
    } else {
      validateExpired();
    }
  };

  const resetErrors = () => {
    setInputState({ month: { ...inputState.month, hasError: false }, year: { ...inputState.month, hasError: false } });
    dispatchCardInfo({ type: 'SET_CARD_EXPIRATION_ERROR_MESSAGE', value: '' })
  };


  return [inputState, onChange, handleOnFocus, handleOnBlur] as const;
};

export default useExpirationDateFormSection;