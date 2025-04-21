import Input from '../@common/Input/Input';
import { ChangeEvent } from 'react';
import {
  errorInputStyle,
  errorMessageStyle,
  sectionTitle,
  sectionTitleSubText,
  sectionTitleText,
} from '../../styles/@common/text.style.ts';
import { cardNumberInputLayout } from './CardNumberInput.style';
import { CARD_NUMBER_ERROR, CARD_NUMBER } from '../../constants';
import {
  inputContainer,
  inputSection,
} from '../../styles/@common/inputContainer.style';
import { CardNumber, CardNumberError } from "../../types";

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
  const getErrorMessage = (): string => {
    if (getCardNumberErrorMessage) {
      return getCardNumberErrorMessage() || CARD_NUMBER_ERROR.onlyNumbers;
    }
    return CARD_NUMBER_ERROR.onlyNumbers;
  };

  return (
    <div css={cardNumberInputLayout}>
      <div css={sectionTitle}>
        <span css={sectionTitleText}>결제할 카드 번호를 입력해 주세요</span>
        <span css={sectionTitleSubText}>
          본인 명의의 카드만 결제 가능합니다.
        </span>
      </div>
      <Input.Group id="card-number">
        <div css={inputContainer}>
          <Input.Label>카드 번호</Input.Label>
          <article css={inputSection}>
            <Input.Group id="card-number">
              <Input
                type="text"
                name="first"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.first?.toString()}
                onChange={onChange}
                css={errorState.first ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-second">
              <Input
                type="text"
                name="second"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.second?.toString()}
                onChange={onChange}
                css={errorState.second ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-third">
              <Input
                type="text"
                name="third"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.third?.toString()}
                onChange={onChange}
                css={errorState.third ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-number-forth">
              <Input
                type="text"
                name="forth"
                maxLength={CARD_NUMBER.maxLength}
                value={cardNumber.forth?.toString()}
                onChange={onChange}
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
