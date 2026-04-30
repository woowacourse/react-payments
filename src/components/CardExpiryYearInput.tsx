import type { ComponentProps } from 'react';
import ValidationInput from './ValidationInput';
import { validateYear, validateNumberString, validateStringLength, validateStringMaxLength } from '../utils';

type CardExpiryYearInputProps = Pick<ComponentProps<typeof ValidationInput>, 'value' | 'onChange'>;

export default function CardExpiryYearInput(props: CardExpiryYearInputProps) {
  return (
    <ValidationInput
      {...props}
      type="text"
      inputMode="numeric"
      autoComplete="cc-exp-year"
      placeholder="YY"
      validations={[
        {
          type: 'limit',
          validator: validateNumberString,
          message: '숫자만 입력 가능합니다.',
        },
        {
          type: 'limit',
          validator: (input: string) => validateStringMaxLength(input, 2),
          message: '2자리까지 입력 가능합니다.',
        },
        {
          type: 'check',
          validator: (input: string) => validateStringLength(input, 2),
          message: '2자리를 입력해주세요.',
        },
        {
          type: 'check',
          validator: validateYear,
          message: '유효한 년도을 입력해주세요. (00 ~ 99)',
        },
      ]}
    />
  );
}
