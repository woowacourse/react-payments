import { ChangeEvent, useRef, useState } from 'react';
import { CARD_NUMBER, CardType } from '../config/card';
import { ERROR_TYPE, ErrorType } from '../config/error';
import {
  CARD_NUMBER_INPUT_TYPE,
  CardNumberInputType,
} from '../config/inputField';
import { getCardTypeFromPrefix } from '../utils/cardType';
import { focusNextInput } from '../utils/focus';
import {
  addItemToRecordArray,
  removeItemFromRecordArray,
} from '../../../../utils/recordArrayUtils';

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
  const [cardType, setCardType] = useState<CardType | null>(null);
  const inputRefs: Record<
    CardNumberInputType,
    React.RefObject<HTMLInputElement | null>
  > = {
    cardNumberPart1: useRef<HTMLInputElement>(null),
    cardNumberPart2: useRef<HTMLInputElement>(null),
    cardNumberPart3: useRef<HTMLInputElement>(null),
    cardNumberPart4: useRef<HTMLInputElement>(null),
  };
  const [isInputComplete, setIsInputComplete] = useState(false);

  const updateCardError = (
    inputName: CardNumberInputType,
    errorStatus: { errorType: ErrorType; isError: boolean }
  ) => {
    if (errorStatus.isError) {
      setErrorTypes((prev) =>
        addItemToRecordArray(prev, inputName, errorStatus.errorType)
      );
    } else {
      setErrorTypes((prev) =>
        removeItemFromRecordArray(prev, inputName, errorStatus.errorType)
      );
    }
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
      const detectedType = getCardTypeFromPrefix(value);
      setCardType(detectedType);
      const isError =
        value.length > CARD_NUMBER.length.prefix && detectedType === null;

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
    handleFocusNextInput(name, value);
  };

  const handleBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;

    updateCardError(name as CardNumberInputType, {
      errorType: ERROR_TYPE.shortCardSegment,
      isError:
        value.length > CARD_NUMBER.length.min &&
        value.length < CARD_NUMBER.length.max,
    });
  };

  const handleFocusNextInput = (key: CardNumberInputType, value: string) => {
    if (key === CARD_NUMBER_INPUT_TYPE.cardNumberPart4) return;
    if (value.length !== CARD_NUMBER.length.max) return;
    if (errorTypes[key].length !== 0) return;

    focusNextInput<CardNumberInputType>(key, inputRefs);
  };

  return {
    inputValues,
    inputRefs,
    errorTypes,
    cardType,
    isInputComplete,
    handleValue,
    handleBlur,
  };
}

export default useCardNumberValidation;
