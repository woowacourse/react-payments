import { useState, type ChangeEvent } from 'react';
import ValidationInput from './Common/ValidationInput';
import { createDigitFieldValidations, validateCVC } from '../utils';
import Flex from './Common/Flex';
import Label from './Common/Label';
import InputErrorMessage from './Common/InputErrorMessage';

interface CardCVCInputProps {
  value: string;
  onChange: (value: string) => void;
}

function CardCVCInput(props: CardCVCInputProps) {
  const [inputError, setInputError] = useState<Error | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <Flex direction="column" gap={10}>
      <Label>CVC</Label>
      <ValidationInput
        value={props.value}
        onChange={handleChange}
        type="text"
        inputMode="numeric"
        autoComplete="cc-exp-csc"
        placeholder="CVC"
        onChangeError={(error) => setInputError(error)}
        validations={[
          ...createDigitFieldValidations(3),
          {
            type: 'onBlur',
            validator: validateCVC,
            message: '유효한 CVC를 입력해주세요.',
          },
        ]}
      />
      {inputError && <InputErrorMessage>{inputError.message}</InputErrorMessage>}
    </Flex>
  );
}

export default CardCVCInput;
