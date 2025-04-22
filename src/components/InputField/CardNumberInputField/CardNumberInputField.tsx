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
import styled from 'styled-components';

interface CardNumberInputFieldProps {
  inputValue: Record<CardNumberInputType, string>;
  setInputValue: Dispatch<SetStateAction<Record<CardNumberInputType, string>>>;
  cardType: CardType;
  setCardType: Dispatch<SetStateAction<CardType>>;
}

const MAX_CARD_LENGTH = 4;
const CARD_TYPE_ID_LENGTH = 2;

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

  const errorStatus = Object.values(errorTypes).find(
    (errorType) => errorType.length
  );

  const errorMessage =
    errorStatus && errorStatus?.length !== 0
      ? ERROR_TYPE_TO_MESSAGE[errorStatus[0]]
      : '';

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
    if (value.length > CARD_TYPE_ID_LENGTH) {
      if (cardType === null) return true;
      return false;
    }

    if (value[0] === '4') setCardType('visa');
    else if (Number(value) >= 51 && Number(value) <= 55) setCardType('master');
    else setCardType(null);

    return false;
  };

  const onChange = ({ name, value }: { name: string; value: string }) => {
    if (value.length > MAX_CARD_LENGTH) return;
    if (name === CARD_NUMBER_INPUT_TYPE[0]) {
      const isError = checkCardTypeFromPrefix(value);
      updateCardError(CARD_NUMBER_INPUT_TYPE[0], {
        errorType: 'noneCardType',
        isError,
      });
    }
    setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const onBlur = (e: ChangeEvent) => {
    const { value, name } = e.target as HTMLInputElement;

    updateCardError(name as CardNumberInputType, {
      errorType: 'shortCardSegment',
      isError: value.length > 0 && value.length < MAX_CARD_LENGTH,
    });
  };

  return (
    <BaseInputField label="카드 번호" errorMessage={errorMessage}>
      {CARD_NUMBER_INPUT_TYPE.map((inputType) => (
        <>
          <Label htmlFor={`card-number-input-${inputType}`} />
          <Input
            id={`card-number-input-${inputType}`}
            key={inputType}
            inputType="number"
            placeholder="1234"
            value={inputValue[inputType]}
            onChange={onChange}
            onBlur={onBlur}
            name={inputType}
            isError={Boolean(errorTypes[inputType].length)}
          />
        </>
      ))}
    </BaseInputField>
  );
}

const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export default CardNumberInputField;
