import { useState, type ChangeEvent } from 'react';
import ValidationInput from './Common/ValidationInput';
import { validateCVC, validateNumberString, validateStringLength, validateStringMaxLength } from '../utils';
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
          {
            type: 'limit',
            validator: validateNumberString,
            message: '숫자만 입력 가능합니다.',
          },
          {
            type: 'limit',
            validator: (input: string) => validateStringMaxLength(input, 3),
            message: '3자리까지 입력 가능합니다.',
          },
          {
            type: 'check',
            validator: (input: string) => validateStringLength(input, 3),
            message: '3자리를 입력해주세요.',
          },
          {
            type: 'check',
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
