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
  const INPUT_FIELD_TYPE = [
    'cardNumberPart1',
    'cardNumberPart2',
    'cardNumberPart3',
    'cardNumberPart4',
  ] as const;
  type InputFieldType = (typeof INPUT_FIELD_TYPE)[number];
  type ErrorType = 'noneCardType' | 'shortCardSegment';

  const [errorTypes, setErrorTypes] = useState<
    Record<InputFieldType, ErrorType[]>
  >({
    cardNumberPart1: [],
    cardNumberPart2: [],
    cardNumberPart3: [],
    cardNumberPart4: [],
  });

  const [errorMessage, setErrorMessage] = useState('');

  const updateCardError = (
    inputName: InputFieldType,
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

  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length <= 4) {
      if (name === 'cardNumberPart1') {
        const isError = checkCardTypeFromPrefix(value);
        updateCardError('cardNumberPart1', {
          errorType: 'noneCardType',
          isError,
        });
      }
      setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
    }
  };

  const onBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;

    updateCardError(name as InputFieldType, {
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
      (errorType) => errorType.length
    );

    if (errorStatus && errorStatus?.length !== 0)
      setErrorMessage(ERROR_TYPE_TO_MESSAGE[errorStatus[0]]);
    else setErrorMessage('');
  }, [errorTypes]);

  return (
    <BaseInputField label="카드 번호" errorMessage={errorMessage}>
      {INPUT_FIELD_TYPE.map((inputFieldType) => (
        <Input
          type="number"
          placeholder="1234"
          value={inputValue[inputFieldType]}
          onChange={onChange}
          onBlur={onBlur}
          name={inputFieldType}
          isError={Boolean(errorTypes[inputFieldType].length)}
        />
      ))}
    </BaseInputField>
  );
}

export default CardNumberInputField;
