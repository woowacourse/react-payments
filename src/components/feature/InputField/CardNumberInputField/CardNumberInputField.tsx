import styled from 'styled-components';
import {
  CARD_NUMBER_INPUT_TYPE,
  CardNumberInputType,
} from '../../../../config/inputField';
import { useInputError } from '../../../../hooks/useInputError';
import { useInputFieldHandler } from '../../../../hooks/useInputFieldHandler';
import BaseInputField from '../../../ui/BaseInputField/BaseInputField';
import Input from '../../../ui/Input/Input';
import { InputFieldProps } from '../Inputfield';

interface onCardNumberChangeProps {
  name: string;
  value: string;
}

const MAX_CARD_LENGTH = 4;

function CardNumberInputField({
  inputValue,
  setInputValue,
  cardType,
  onComplete,
}: InputFieldProps<CardNumberInputType>) {
  const { errorTypes, errorMessage, isComplete, validateInputError } =
    useInputError(inputValue, MAX_CARD_LENGTH);

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

  const onCardNumberChange = ({ name, value }: onCardNumberChangeProps) => {
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
