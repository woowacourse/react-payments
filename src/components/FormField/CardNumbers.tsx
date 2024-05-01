import React from 'react';
import FormField from './FormField';
import Input from '../Input/Input';
import InputField from '../InputField/InputField';
import MESSAGE from '../../constants/Message';
import CONDITION from '../../constants/Condition';
import { CardNumberErrorState, CardNumberState, SetCardNumberState } from '../../types/Types';

const { TITLE, CAPTION, LABEL, ERROR, PLACEHOLDER } = MESSAGE;
const { MAX_LENGTH } = CONDITION;

interface CardNumbersProps {
  cardNumberState: CardNumberState;
  setCardNumberState: SetCardNumberState;
  cardNumberErrorState: CardNumberErrorState;
}

const CardNumbers = ({
  cardNumberState,
  setCardNumberState,
  cardNumberErrorState,
}: CardNumbersProps) => {
  const { first, second, third, fourth } = cardNumberState;
  const { onChangeFirst, onChangeSecond, onChangeThird, onChangeFourth } = setCardNumberState;
  const { isFirstError, isSecondError, isThirdError, isFourthError } = cardNumberErrorState;

  const cardNumberErrorMessage =
    isFirstError || isSecondError || isThirdError || isFourthError ? ERROR.cardNumber : '';

  return (
    <FormField title={TITLE.cardNumber} caption={CAPTION.cardNumber}>
      <InputField label={LABEL.cardNumber} error={cardNumberErrorMessage}>
        <Input
          aria-label="첫_번째_카드번호"
          placeholder={PLACEHOLDER.cardNumber}
          value={first}
          maxLength={MAX_LENGTH.cardNumber}
          onChange={onChangeFirst}
          aria-invalid={isFirstError}
          autoFocus
        />
        <Input
          aria-label="두_번째_카드번호"
          placeholder={PLACEHOLDER.cardNumber}
          value={second}
          maxLength={MAX_LENGTH.cardNumber}
          onChange={onChangeSecond}
          aria-invalid={isSecondError}
        />
        <Input
          aria-label="세_번째_카드번호"
          placeholder={PLACEHOLDER.cardNumber}
          value={third}
          maxLength={MAX_LENGTH.cardNumber}
          onChange={onChangeThird}
          aria-invalid={isThirdError}
        />
        <Input
          aria-label="네_번째_카드번호"
          placeholder={PLACEHOLDER.cardNumber}
          value={fourth}
          maxLength={MAX_LENGTH.cardNumber}
          onChange={onChangeFourth}
          aria-invalid={isFourthError}
        />
      </InputField>
    </FormField>
  );
};

export default CardNumbers;
