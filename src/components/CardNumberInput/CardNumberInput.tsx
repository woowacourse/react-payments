import Input from '../@common/Input/Input';
import Title from "../@common/Title/Title";
import React, { ChangeEvent } from 'react';
import { CardNumber, CardNumberError } from "../../types";
import { useAutoFocus } from "../../hooks";
import { cardNumberInputLayout } from './CardNumberInput.style';
import { CARD_NUMBER_ERROR, CARD_NUMBER } from '../../constants';
import { errorInputStyle, errorMessageStyle } from '../../styles/@common/text.style';
import { inputContainer, inputSection } from '../../styles/@common/inputContainer.style';

type CardNumberInputProps = {
  cardNumber: CardNumber;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorState: CardNumberError;
  getCardNumberErrorMessage?: () => string | null;
};

function CardNumberInput({
  cardNumber,
  onChange,
  errorState,
  getCardNumberErrorMessage,
}: CardNumberInputProps) {
  const { refs, focusNext } = useAutoFocus(4);

  const handleCardNumberChange = (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);

    if (e.target.value.length === CARD_NUMBER.maxLength) {
      focusNext(index);
    }
  }

  const handleBackspaceKeyDown = (index: number) => (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && e.currentTarget.value.length === 0 && index > 0) {
      refs[index - 1].current?.focus();
    }
  };

  const getErrorMessage = (): string => {
    if (getCardNumberErrorMessage) {
      return getCardNumberErrorMessage() || CARD_NUMBER_ERROR.onlyNumbers;
    }
    return CARD_NUMBER_ERROR.onlyNumbers;
  };

  return (
    <div css={cardNumberInputLayout}>
      <Title title='결제할 카드 번호를 입력해 주세요' subTitle='본인 명의의 카드만 결제 가능합니다.'/>
      <Input.Group id="card-number">
        <div css={inputContainer}>
          <Input.Label>카드 번호</Input.Label>
          <article css={inputSection}>
            <Input.Group id="card-number">
              <Input
                ref={refs[0]}
                type="text"
                name="first"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.first?.toString()}
                onChange={handleCardNumberChange(0)}
                onKeyDown={handleBackspaceKeyDown(0)}
                css={errorState.first ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-second">
              <Input
                ref={refs[1]}
                type="text"
                name="second"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.second?.toString()}
                onChange={handleCardNumberChange(1)}
                onKeyDown={handleBackspaceKeyDown(1)}
                css={errorState.second ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-third">
              <Input
                ref={refs[2]}
                type="text"
                name="third"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.third?.toString()}
                onChange={handleCardNumberChange(2)}
                onKeyDown={handleBackspaceKeyDown(2)}
                css={errorState.third ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-forth">
              <Input
                ref={refs[3]}
                type="text"
                name="forth"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.forth?.toString()}
                onChange={handleCardNumberChange(4)}
                onKeyDown={handleBackspaceKeyDown(3)}
                css={errorState.forth ? errorInputStyle : undefined}
              />
            </Input.Group>
          </article>
          {
            Object.values(errorState).some(Boolean) && (
            <div css={errorMessageStyle}>{getErrorMessage()}</div>
          )}
        </div>
      </Input.Group>
    </div>
  );
}

export default CardNumberInput;
