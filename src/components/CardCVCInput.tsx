import { type ComponentProps } from 'react';
import ValidationInput from './ValidationInput';
import { validateCVC, validateNumberString, validateStringLength, validateStringMaxLength } from '../utils';

type CardCVCInputProps = Pick<ComponentProps<typeof ValidationInput>, 'value' | 'onChange'>;

function CardCVCInput(props: CardCVCInputProps) {
  return (
    <ValidationInput
      {...props}
      type="text"
      inputMode="numeric"
      autoComplete="cc-exp-csc"
      placeholder="CVC"
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
  );
}

export default CardCVCInput;
