import Input from '../@common/Input/Input';
import { ChangeEvent } from 'react';
import {
  errorInputStyle,
  errorMessageStyle,
  sectionTitle,
  sectionTitleText,
} from '../../styles/@common/text/text.style';
import {
  cardNumberInputContainer,
  cardNumberInputInputContainer,
} from '../CardNumberInput/CardNumberInput.style';
import { cardPeriodInputLayout } from '../CardPeriod/CardPeriodInput.style';
import { CardCVC } from '../../hooks';
import { CARD_CVC_ERROR, CARD_CVC } from '../../constants';

type CardCVCInputProps = {
  cardCVC: CardCVC;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
  getCardCVCErrorMessage?: () => string | null;
};

function CardCVCInput({
  cardCVC,
  onChange,
  hasError,
  getCardCVCErrorMessage,
}: CardCVCInputProps) {
  const getErrorMessage = (): string => {
    if (getCardCVCErrorMessage) {
      return getCardCVCErrorMessage() || CARD_CVC_ERROR.onlyNumbers;
    }
    return CARD_CVC_ERROR.onlyNumbers;
  };

  return (
    <div css={cardPeriodInputLayout}>
      <div css={sectionTitle}>
        <span css={sectionTitleText}>CVC 번호를 입력해 주세요</span>
      </div>
      <div css={cardNumberInputContainer}>
        <Input.Label>CVC</Input.Label>
        <article css={cardNumberInputInputContainer}>
          <Input
            type="text"
            name="cvc"
            maxLength={CARD_CVC.maxLength}
            value={cardCVC?.toString()}
            onChange={onChange}
            css={hasError ? errorInputStyle : undefined}
          />
        </article>
        {hasError && <div css={errorMessageStyle}>{getErrorMessage()}</div>}
      </div>
    </div>
  );
}

export default CardCVCInput;
