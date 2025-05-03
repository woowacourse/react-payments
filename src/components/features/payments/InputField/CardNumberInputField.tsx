import { ChangeEvent, RefObject } from 'react';
import { BaseInputField } from '../../../common/BaseInputField';
import { Input } from '../../../common/Input';
import { ErrorType } from '../config/error';
import {
  CARD_NUMBER_INPUT_TYPE,
  CardNumberInputType,
} from '../config/inputField';
import { getFirstErrorMessage } from '../utils/error';

interface CardNumberInputFieldProps {
  inputValues: Record<CardNumberInputType, string>;
  inputRefs: Record<CardNumberInputType, RefObject<HTMLInputElement | null>>;
  errorTypes: Record<CardNumberInputType, ErrorType[]>;
  handleInputValue: ({
    name,
    value,
  }: {
    name: CardNumberInputType;
    value: string;
  }) => void;
  onBlur: (e: ChangeEvent) => void;
}

function CardNumberInputField({
  inputValues,
  inputRefs,
  errorTypes,
  handleInputValue,
  onBlur,
}: CardNumberInputFieldProps) {
  const errorStatus = Object.values(errorTypes).find(
    (errorStatus) => errorStatus.length
  );

  const errorMessage = getFirstErrorMessage(errorStatus);

  return (
    <BaseInputField label="카드 번호" errorMessage={errorMessage}>
      {Object.values(CARD_NUMBER_INPUT_TYPE).map((inputType) => (
        <Input
          key={inputType}
          inputType="number"
          placeholder="1234"
          name={inputType}
          ref={inputRefs[inputType]}
          value={inputValues[inputType]}
          onChange={handleInputValue}
          onBlur={onBlur}
          isError={Boolean(errorTypes[inputType].length)}
        />
      ))}
    </BaseInputField>
  );
}

export default CardNumberInputField;
