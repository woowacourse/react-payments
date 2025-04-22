import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import BaseInputField from '../../../common/BaseInputField/BaseInputField';
import Input from '../../../common/Input/Input';
import { CARD_NUMBER, CARD_TYPE, CardType } from '../config/card';
import { ERROR_TYPE, ERROR_TYPE_TO_MESSAGE, ErrorType } from '../config/error';
import {
  CARD_NUMBER_INPUT_TYPE,
  CardNumberInputType,
} from '../config/inputField';

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
    if (value.length <= CARD_NUMBER.length.prefix) {
      if (value[0] === '4') setCardType(CARD_TYPE.visa);
      else if (value >= '51' && value <= '55') setCardType(CARD_TYPE.master);
      else setCardType(CARD_TYPE.none);
    } else if (cardType === CARD_TYPE.none) {
      return true;
    }
    return false;
  };

  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length <= CARD_NUMBER.length.max) {
      if (name === CARD_NUMBER_INPUT_TYPE.cardNumberPart1) {
        const isError = checkCardTypeFromPrefix(value);
        updateCardError(CARD_NUMBER_INPUT_TYPE.cardNumberPart1, {
          errorType: ERROR_TYPE.noneCardType,
          isError,
        });
      }
      setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
    }
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
      {Object.values(CARD_NUMBER_INPUT_TYPE).map((inputType) => (
        <Input
          key={inputType}
          inputType="number"
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
