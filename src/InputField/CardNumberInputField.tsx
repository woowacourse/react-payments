import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import BaseInputField from '../BaseInputField';
import Input from '../Input';
import { CardNumberInputValueType } from '../types/inputFieldType';
import { CardType } from '../types/cardType';

function CardNumberInputField({
  inputValue,
  setInputValue,
  cardType,
  setCardType,
}: {
  inputValue: Record<CardNumberInputValueType, string>;
  setInputValue: Dispatch<
    SetStateAction<Record<CardNumberInputValueType, string>>
  >;
  cardType: CardType;
  setCardType: Dispatch<SetStateAction<CardType>>;
}) {
  type ErrorType = 'noneCardType' | 'shortCardSegment';

  const [errorTypes, setErrorTypes] = useState<Record<string, ErrorType[]>>({
    cardNumberPart1: [],
    cardNumberPart2: [],
    cardNumberPart3: [],
    cardNumberPart4: [],
  });

  const [errorMessage, setErrorMessage] = useState('');

  const updateCardError = (
    inputName: string,
    errorStatus: { errorType: ErrorType; isError: boolean }
  ) => {
    const currentErrorType = errorTypes[inputName];

    if (errorStatus.isError) {
      const set = new Set(currentErrorType);
      set.add(errorStatus.errorType);
      setErrorTypes((prevValue) => ({
        ...prevValue,
        [inputName]: Array.from(set),
      }));
    } else {
      const filteredErrorType = currentErrorType.filter(
        (errorType) => errorType !== errorStatus.errorType
      );
      setErrorTypes((prevValue) => ({
        ...prevValue,
        [inputName]: filteredErrorType,
      }));
    }
  };

  const checkCardTypeFromPrefix = (value: string) => {
    if (value.length <= 2) {
      if (value[0] === '4') setCardType('visa');
      else if (value >= '51' && value <= '55') setCardType('master');
      else setCardType(null);
    } else if (cardType === null) {
      return true;
    }
    return false;
  };

  const onChange = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    const numericValue = value.replace(/[^0-9]/g, '');

    if (numericValue.length <= 4) {
      if (name === 'cardNumberPart1') {
        const isError = checkCardTypeFromPrefix(value);
        updateCardError('cardNumberPart1', {
          errorType: 'noneCardType',
          isError,
        });
      }
      setInputValue((prevValue) => ({ ...prevValue, [name]: numericValue }));
    }
  };

  const onBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;
    updateCardError(name, {
      errorType: 'shortCardSegment',
      isError: value.length > 0 && value.length < 4,
    });
  };

  const ERROR_TYPE_TO_MESSAGE = {
    noneCardType: '유효하지 않은 카드 번호입니다. 카드 번호를 확인해주세요',
    shortCardSegment: '카드 번호는 4자리씩 입력해주세요.',
  };

  useEffect(() => {
    const errorStatus = Object.values(errorTypes).find(
      (errorType) => errorType
    );
    if (errorStatus && errorStatus?.length !== 0)
      setErrorMessage(ERROR_TYPE_TO_MESSAGE[errorStatus[0]]);
    else setErrorMessage('');
  }, [errorTypes]);

  return (
    <BaseInputField label="카드 번호" errorMessage={errorMessage}>
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.cardNumberPart1}
        onChange={onChange}
        onBlur={onBlur}
        name="cardNumberPart1"
        isError={Boolean(errorTypes.cardNumberPart1.length)}
      />
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.cardNumberPart2}
        onChange={onChange}
        onBlur={onBlur}
        name="cardNumberPart2"
        isError={Boolean(errorTypes.cardNumberPart2.length)}
      />
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.cardNumberPart3}
        onChange={onChange}
        onBlur={onBlur}
        name="cardNumberPart3"
        isError={Boolean(errorTypes.cardNumberPart3.length)}
      />
      <Input
        inputMode="numeric"
        placeholder="1234"
        value={inputValue.cardNumberPart4}
        onChange={onChange}
        onBlur={onBlur}
        name="cardNumberPart4"
        isError={Boolean(errorTypes.cardNumberPart4.length)}
      />
    </BaseInputField>
  );
}

export default CardNumberInputField;
