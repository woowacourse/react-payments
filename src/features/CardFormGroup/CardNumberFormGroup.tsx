import { FormGroup } from '@/core/components/formGroup/FormGroup';
import { Input } from '@/core/components/input/Input';
import { CARD_BRAND_FORMAT } from '@/entities/card/brand';
import type { Brand } from '@/entities/card/brand';
import { useState } from 'react';

import { isNumericString } from '@/core/utils/validator';

interface CardNumberFormGroupProps {
  brand: Brand;
  cardNumbers: string[];
  handleChangeCardNumber: (value: string, index: number) => void;
  errorMessage?: string;
}

type InputState = 'idle' | 'invalid' | 'touched' | 'valid';

const ERROR_MESSAGE = {
  TYPE: '숫자만 입력 가능합니다.',
  EMPTY: '카드 번호를 전부 채워주세요.',
  DEFAULT: '',
};

export const CardNumberFormGroup = ({
  brand,
  cardNumbers,
  handleChangeCardNumber,
}: CardNumberFormGroupProps) => {
  const INPUT_FORMAT = CARD_BRAND_FORMAT[brand];
  const [inputStates, setInputStates] = useState<InputState[]>(() =>
    INPUT_FORMAT.map(() => 'idle'),
  );

  // 현재 [4,4,4,4] -> [idle, idle, idle, idle]

  const handleChange = (value: string, index: number) => {
    if (value !== '' && !isNumericString(value)) {
      const nextInputStates = [...inputStates];
      nextInputStates[index] = 'invalid';
      setInputStates(nextInputStates);
      return;
    }
    const nextInputStates = [...inputStates];
    nextInputStates[index] = value.length === INPUT_FORMAT[index] ? 'valid' : 'idle';
    setInputStates(nextInputStates);
    handleChangeCardNumber(value, index);
  };

  const handleBlurCardNumber = (index: number) => {
    if (inputStates[index] === 'valid') return;
    const nextInputStates = [...inputStates];
    nextInputStates[index] = 'touched';
    setInputStates(nextInputStates);
  };

  const isInputError = (index: number) => {
    if (inputStates[index] === 'invalid') return true;
    if (inputStates[index] === 'touched' && cardNumbers[index].length !== INPUT_FORMAT[index])
      return true;
    return false;
  };

  const errorMessage = () => {
    if (inputStates.some((state) => state === 'invalid')) return ERROR_MESSAGE.TYPE;
    if (inputStates.some((state, index) => cardNumbers[index] !== '' && state === 'touched'))
      return ERROR_MESSAGE.EMPTY;
    return ERROR_MESSAGE.DEFAULT;
  };

  return (
    <FormGroup
      title="결제할 카드 번호를 입력해 주세요"
      subTitle="본인 명의의 카드만 결제 가능합니다."
      label="카드 번호"
      errorMessage={errorMessage()}
    >
      {INPUT_FORMAT.map((size, index) => (
        <Input
          type="text"
          inputMode="numeric"
          key={`${brand}-card-number-${index}`}
          value={cardNumbers[index]}
          placeholder="1234"
          maxLength={size}
          isError={isInputError(index)}
          onChange={(e) => handleChange(e.target.value, index)}
          onBlur={() => handleBlurCardNumber(index)}
        />
      ))}
    </FormGroup>
  );
};
