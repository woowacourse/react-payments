import { memo } from 'react';
import type { ChangeEvent, FocusEvent } from 'react';
import type { CardFormData, CardFormValidation } from '../../../types';
import Input from '../../common/Input/Input';
import InputContainer from '../../common/InputContainer/InputContainer';
import Label from '../../common/Label/Label';
import { CARD_NUMBER_UNIT_MAX_LENGTH } from '../../../constants/input';
import { formatNumber } from '../../../utils/formatter';
import { isElementOfType } from '../../../utils/eventUtils';
import styles from './style.module.css';
import { useInputBackwardFocus } from '../../../hooks/common/useInputBackwardFocus';

interface CardNumberProps {
  value: string[];
  isError: boolean;
  updateInputValue: <K extends keyof CardFormData>(key: K, value: CardFormData[K]) => void;
  updateInputError: <K extends keyof CardFormValidation>(key: K, value: CardFormData[K]) => void;
}

const CardNumber = ({ value, isError, updateInputValue, updateInputError }: CardNumberProps) => {
  const { handleBackspacePress } = useInputBackwardFocus();

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
      <Label htmlFor="cardNumber" id="cardNumber-label" required>
        카드 번호
      </Label>
      <div
        className={`${styles.container} ${isError && styles.error}`}
        onBlur={onBlur}
        onKeyDown={handleBackspacePress}
      >
        <Input
          id="cardNumber"
          name="cardNumber"
          data-index={0}
          minLength={CARD_NUMBER_UNIT_MAX_LENGTH}
          maxLength={CARD_NUMBER_UNIT_MAX_LENGTH}
          autoComplete="cc-number"
          inputMode="numeric"
          required
          aria-label="첫 번째 카드번호 4자리 입력"
          onChange={onChange}
        />
        <Input
          id="cardNumber1"
          name="cardNumber"
          data-index={1}
          minLength={CARD_NUMBER_UNIT_MAX_LENGTH}
          maxLength={CARD_NUMBER_UNIT_MAX_LENGTH}
          autoComplete="cc-number"
          inputMode="numeric"
          aria-label="두 번째 카드번호 4자리 입력"
          aria-labelledby="cardNumber-label"
          required
          onChange={onChange}
        />
        <Input
          id="cardNumber2"
          name="cardNumber"
          type="password"
          data-index={2}
          minLength={CARD_NUMBER_UNIT_MAX_LENGTH}
          maxLength={CARD_NUMBER_UNIT_MAX_LENGTH}
          autoComplete="cc-number"
          inputMode="numeric"
          aria-label="세 번째 카드번호 4자리 입력"
          aria-labelledby="cardNumber-label"
          required
          onChange={onChange}
        />
        <Input
          id="cardNumber3"
          name="cardNumber"
          type="password"
          data-index={3}
          minLength={CARD_NUMBER_UNIT_MAX_LENGTH}
          maxLength={CARD_NUMBER_UNIT_MAX_LENGTH}
          autoComplete="cc-number"
          inputMode="numeric"
          aria-label="네 번째 카드번호 4자리 입력"
          aria-labelledby="cardNumber-label"
          required
          onChange={onChange}
        />
      </div>
    </InputContainer>
  );
};

export default memo(CardNumber);
