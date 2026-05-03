import { type ChangeEvent } from 'react';
import type { CardFormState } from '../types';
import ValidationInput from './Common/ValidationInput';
import Flex from './Common/Flex';
import {
  validateMonth,
  validateNumberString,
  validateStringLength,
  validateStringMaxLength,
  validateYear,
} from '../utils';
import Label from './Common/Label';

interface CardExpiryDateInputProps {
  value: Pick<CardFormState, 'expiryMonth' | 'expiryYear'>;
  onChange: (value: [string, string]) => void;
}

export default function CardExpiryDateInput(props: CardExpiryDateInputProps) {
  const handleChangeMonth = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange([event.target.value, props.value.expiryYear]);
  };

  const handleChangeYear = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange([props.value.expiryMonth, event.target.value]);
  };

  return (
    <Flex direction="column" gap={10}>
      <Label>유효기간</Label>
      <Flex gap={10}>
        <ValidationInput
          type="text"
          inputMode="numeric"
          autoComplete="cc-exp-month"
          placeholder="MM"
          value={props.value.expiryMonth}
          onChange={handleChangeMonth}
          isShowError={true}
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
              validator: validateMonth,
              message: '유효한 월을 입력해주세요. (01 ~ 12)',
            },
          ]}
        />
        <ValidationInput
          type="text"
          inputMode="numeric"
          autoComplete="cc-exp-year"
          placeholder="YY"
          value={props.value.expiryYear}
          onChange={handleChangeYear}
          isShowError={true}
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
      </Flex>
    </Flex>
  );
}
