import type { ComponentProps } from 'react';
import ValidationInput from './ValidationInput';
import { validateMonth, validateNumberString, validateStringLength, validateStringMaxLength } from '../utils';

type CardExpiryMonthInputProps = Pick<ComponentProps<typeof ValidationInput>, 'value' | 'onChange'>;

export default function CardExpiryMonthInput(props: CardExpiryMonthInputProps) {
  return (
    <ValidationInput
      {...props}
      type="text"
      inputMode="numeric"
      autoComplete="cc-exp-month"
      placeholder="MM"
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
          message: '2자리수를 입력하세요.',
        },
        {
          type: 'check',
          validator: validateMonth,
          message: '유효한 월을 입력해주세요 (01 ~ 12)',
        },
      ]}
    />
  );
}
