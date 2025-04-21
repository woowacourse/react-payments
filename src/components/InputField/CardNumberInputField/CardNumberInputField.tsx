import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import {
  CARD_NUMBER_INPUT_TYPE,
  CardNumberInputType,
} from '../../../config/inputField';
import { CardType } from '../../../config/card';
import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../../../config/error';
import BaseInputField from '../../BaseInputField/BaseInputField';
import Input from '../../Input/Input';

interface CardNumberInputFieldProps {
  inputValue: Record<CardNumberInputType, string>;
  setInputValue: Dispatch<SetStateAction<Record<CardNumberInputType, string>>>;
  cardType: CardType;
  setCardType: Dispatch<SetStateAction<CardType>>;
}

function CardNumberInputField({
  inputValue,
  setInputValue,
  cardType,
  setCardType,
}: CardNumberInputFieldProps) {
  const [errorTypes, setErrorTypes] = useState<
    Record<CardNumberInputType, ErrorType[]>
  >({
    cardNumberPart1: [],
    cardNumberPart2: [],
    cardNumberPart3: [],
    cardNumberPart4: [],
  });

  const [errorMessage, setErrorMessage] = useState('');

  const updateCardError = (
    inputName: CardNumberInputType,
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
      if (name === CARD_NUMBER_INPUT_TYPE[0]) {
        const isError = checkCardTypeFromPrefix(value);
        updateCardError(CARD_NUMBER_INPUT_TYPE[0], {
          errorType: 'noneCardType',
          isError,
        });
      }
      setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
    }
  };

  const onBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;

    updateCardError(name as CardNumberInputType, {
      errorType: 'shortCardSegment',
      isError: value.length > 0 && value.length < 4,
    });
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
      {CARD_NUMBER_INPUT_TYPE.map((inputType) => (
        <Input
          key={inputType}
          type="number"
          placeholder="1234"
          value={inputValue[inputType]}
          onChange={onChange}
          onBlur={onBlur}
          name={inputType}
          isError={Boolean(errorTypes[inputType].length)}
        />
      ))}
    </BaseInputField>
  );
}

export default CardNumberInputField;
