import { ChangeEvent, useRef, useState } from 'react';
import {
  CARD_NUMBER_INPUT_TYPE,
  CardNumberInputType,
} from '../config/inputField';
import { ERROR_TYPE, ErrorType } from '../config/error';
import { CARD_NUMBER, CARD_TYPE, CardType } from '../config/card';

function useCardNumberValidation() {
  const [inputValues, setInputValues] = useState<
    Record<CardNumberInputType, string>
  >({
    cardNumberPart1: '',
    cardNumberPart2: '',
    cardNumberPart3: '',
    cardNumberPart4: '',
  });
  const [errorTypes, setErrorTypes] = useState<
    Record<CardNumberInputType, ErrorType[]>
  >({
    cardNumberPart1: [],
    cardNumberPart2: [],
    cardNumberPart3: [],
    cardNumberPart4: [],
  });
  const [cardType, setCardType] = useState<CardType>(CARD_TYPE.none);
  const inputRefs = {
    cardNumberPart1: useRef<HTMLInputElement | null>(null),
    cardNumberPart2: useRef<HTMLInputElement | null>(null),
    cardNumberPart3: useRef<HTMLInputElement | null>(null),
    cardNumberPart4: useRef<HTMLInputElement | null>(null),
  };
  const [isInputComplete, setIsInputComplete] = useState(false);

  const updateCardError = (
    inputName: CardNumberInputType,
    errorStatus: { errorType: ErrorType; isError: boolean }
  ) => {
    if (errorStatus.isError) {
      setErrorTypes((prev) => ({
        ...prev,
        [inputName]: [...prev[inputName], errorStatus.errorType],
      }));
    } else {
      setErrorTypes((prev) => ({
        ...prev,
        [inputName]: prev[inputName].filter(
          (errorType) => errorType !== errorStatus.errorType
        ),
      }));
    }
  };

  const checkCardTypeFromPrefix = (value: string) => {
    if (value.length > CARD_NUMBER.length.prefix) {
      return cardType === CARD_TYPE.none;
    }

    if (value[0] === '4') setCardType(CARD_TYPE.visa);
    else if (value >= '51' && value <= '55') setCardType(CARD_TYPE.master);
    else setCardType(CARD_TYPE.none);
    return false;
  };

  const handleValue = ({
    name,
    value,
  }: {
    name: CardNumberInputType;
    value: string;
  }) => {
    if (value.length > CARD_NUMBER.length.max) return;

    if (name === CARD_NUMBER_INPUT_TYPE.cardNumberPart1) {
      const isError = checkCardTypeFromPrefix(value);
      updateCardError(CARD_NUMBER_INPUT_TYPE.cardNumberPart1, {
        errorType: ERROR_TYPE.noneCardType,
        isError,
      });
    }
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (
      name === CARD_NUMBER_INPUT_TYPE.cardNumberPart4 &&
      value.length === CARD_NUMBER.length.max
    )
      setIsInputComplete(true);
    handleNextInputFocus(name, value);
  };

  const onBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;

    updateCardError(name as CardNumberInputType, {
      errorType: ERROR_TYPE.shortCardSegment,
      isError:
        value.length > CARD_NUMBER.length.min &&
        value.length < CARD_NUMBER.length.max,
    });
  };

  const handleNextInputFocus = (key: CardNumberInputType, value: string) => {
    if (
      value.length !== CARD_NUMBER.length.max ||
      key === 'cardNumberPart4' ||
      errorTypes[key].length !== 0
    ) {
      return;
    }
    const keyArray = Object.keys(CARD_NUMBER_INPUT_TYPE);

    const currentKeyIndex = keyArray.indexOf(key);
    const nextInputKey = keyArray[currentKeyIndex + 1] as CardNumberInputType;
    const nextInputRef = inputRefs[nextInputKey];
    if (nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };

  return {
    inputValues,
    inputRefs,
    errorTypes,
    cardType,
    isInputComplete,
    handleValue,
    onBlur,
  };
}

export default useCardNumberValidation;
