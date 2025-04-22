import { ChangeEvent } from 'react';
import BaseInputField from '../../../common/BaseInputField/BaseInputField';
import Input from '../../../common/Input/Input';
import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../config/error';
import {
  CARD_NUMBER_INPUT_TYPE,
  CardNumberInputType,
} from '../config/inputField';

interface CardNumberInputFieldProps {
  inputValues: Record<CardNumberInputType, string>;
  errorTypes: Record<CardNumberInputType, ErrorType[]>;
  handleValue: ({
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
  errorTypes,
  handleValue,
  onBlur,
}: CardNumberInputFieldProps) {
  const errorStatus = Object.values(errorTypes).find(
    (errorStatus) => errorStatus.length
  );

  const errorMessage =
    errorStatus && errorStatus?.length !== 0
      ? ERROR_TYPE_TO_MESSAGE[errorStatus[0]]
      : '';

  return (
    <BaseInputField label="카드 번호" errorMessage={errorMessage}>
      {Object.values(CARD_NUMBER_INPUT_TYPE).map((inputType) => (
        <Input
          key={inputType}
          inputType="number"
          placeholder="1234"
          value={inputValues[inputType]}
          onChange={handleValue}
          onBlur={onBlur}
          name={inputType}
          isError={Boolean(errorTypes[inputType].length)}
        />
      ))}
    </BaseInputField>
  );
}

export default CardNumberInputField;
