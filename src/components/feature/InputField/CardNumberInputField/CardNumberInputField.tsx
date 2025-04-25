import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { CardType } from '../../../../config/card';
import {
  CARD_NUMBER_INPUT_TYPE,
  CardNumberInputType,
  FieldName,
} from '../../../../config/inputField';
import { useInputErrorHandler } from '../../../../hooks/useInputErrorHandler';
import { useInputFieldHandler } from '../../../../hooks/useInputFieldHandler';
import BaseInputField from '../../../ui/BaseInputField/BaseInputField';
import Input from '../../../ui/Input/Input';

interface CardNumberInputFieldProps {
  inputValue: Record<CardNumberInputType, string>;
  setInputValue: Dispatch<SetStateAction<Record<CardNumberInputType, string>>>;
  cardType: CardType;
  onComplete: ({
    isComplete,
    fieldName,
  }: {
    isComplete: boolean;
    fieldName: FieldName;
  }) => void;
}

const MAX_CARD_LENGTH = 4;

function CardNumberInputField({
  inputValue,
  setInputValue,
  cardType,
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

  onComplete?.({
    isComplete: isComplete && !Boolean(errorMessage),
    fieldName: 'cardNumber',
  });

  const onCardNumberChange = ({
    name,
    value,
  }: {
    name: string;
    value: string;
  }) => {
    onChange({ name, value });
    if (name === CARD_NUMBER_INPUT_TYPE[0]) {
      validateInputError(name, {
        errorType: 'noneCardType',
        isError: cardType === null,
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
