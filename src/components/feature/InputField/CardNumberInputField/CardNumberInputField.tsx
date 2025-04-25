import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { CardType } from '../../../../config/card';
import {
  CARD_NUMBER_INPUT_TYPE,
  CardNumberInputType,
} from '../../../../config/inputField';
import { useInputErrorHandler } from '../../../../hooks/useInputErrorHandler';
import { useInputFieldHandler } from '../../../../hooks/useInputFieldHandler';
import Input from '../../../ui/Input/Input';
import BaseInputField from '../../BaseInputField/BaseInputField';

interface CardNumberInputFieldProps {
  inputValue: Record<CardNumberInputType, string>;
  setInputValue: Dispatch<SetStateAction<Record<CardNumberInputType, string>>>;
  cardType: CardType;
  setCardType: Dispatch<SetStateAction<CardType>>;
  onComplete: (isComplete: boolean) => void;
}

const MAX_CARD_LENGTH = 4;
const CARD_TYPE_ID_LENGTH = 2;

function CardNumberInputField({
  inputValue,
  setInputValue,
  cardType,
  setCardType,
  onComplete,
}: CardNumberInputFieldProps) {
  const { errorTypes, errorMessage, isComplete, validateInputError } =
    useInputErrorHandler(
      [...CARD_NUMBER_INPUT_TYPE],
      inputValue,
      MAX_CARD_LENGTH
    );

  const { onChange, onBlur } = useInputFieldHandler({
    validateInputError,
    setInputValue,
    inputErrorType: 'shortCardSegment',
    maxLength: MAX_CARD_LENGTH,
  });

  onComplete?.(isComplete && !Boolean(errorMessage));

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

  const onCardNumberChange = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    onChange({ name, value });
    if (name === CARD_NUMBER_INPUT_TYPE[0]) {
      const isError = checkCardTypeFromPrefix(value);

      validateInputError(name, {
        errorType: 'noneCardType',
        isError,
      });
    }
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
            onChange={onCardNumberChange}
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
