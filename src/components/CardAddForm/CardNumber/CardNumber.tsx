import { memo } from 'react';
import type { ChangeEvent, FocusEvent } from 'react';
import type { CardFormData, CardFormValidation } from '../../../types';
import Input from '../../common/Input/Input';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import { formatNumber } from '../../../utils/formatter';
import { isElementOfType } from '../../../utils/eventUtils';
import styles from './style.module.css';

interface CardNumberProps {
  value: string[];
  isError: boolean;
  updateInputValue: <K extends keyof CardFormData>(key: K, value: CardFormData[K]) => void;
  updateInputError: <K extends keyof CardFormValidation>(key: K, value: CardFormData[K]) => void;
}

const CardNumber = ({ value, isError, updateInputValue, updateInputError }: CardNumberProps) => {
  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    target.value = formatNumber(target.value);

    const newCardNumber = [...value];
    newCardNumber[Number(target.dataset.index)] = target.value;
    updateInputValue('cardNumber', newCardNumber);
  };

  const onBlur = (event: FocusEvent<HTMLElement>) => {
    if (event.currentTarget.contains(event.relatedTarget)) return;
    if (!isElementOfType<HTMLInputElement>(event)) return;

    const newCardNumber = [...value];
    newCardNumber[Number(event.target.dataset.index)] = event.target.value;
    updateInputError('cardNumber', newCardNumber);
  };

  return (
    <InputContainer
      supportingText={{
        error: '카드에 표시된 16자리 숫자와 동일하게 입력해주세요',
      }}
      isError={isError}
    >
      <Label htmlFor="cardNumber" required>
        카드 번호
      </Label>
      <div className={`${styles.container} ${isError && styles.error}`} onBlur={onBlur}>
        {Array.from({ length: 4 }, (_, index) => (
          <Input
            key={index}
            id="cardNumber"
            name="cardNumber"
            type={index < 2 ? 'text' : 'password'}
            data-index={index}
            minLength={4}
            maxLength={4}
            autoComplete="cc-number"
            inputMode="numeric"
            required
            onChange={onChange}
          />
        ))}
      </div>
    </InputContainer>
  );
};

export default memo(CardNumber);
