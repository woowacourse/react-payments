import { ChangeEvent } from 'react';
import {
  errorInputStyle,
  errorMessageStyle,
  sectionTitle,
  sectionTitleText,
} from '../../styles/@common/text/text.style';
import Input from '../@common/Input/Input';
import {
  cardNumberInputContainer,
  cardNumberInputInputContainer,
} from '../CardNumberInput/CardNumberInput.style';
import { cardPeriodInputLayout } from '../CardPeriod/CardPeriodInput.style';

type CardCVCInputProps = {
  cardCVC: number | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
};

function CardCVCInput({ cardCVC, onChange, hasError }: CardCVCInputProps) {
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
            maxLength={3}
            value={cardCVC?.toString()}
            onChange={onChange}
            css={hasError ? errorInputStyle : undefined}
          />
        </article>
        {hasError && <div css={errorMessageStyle}>숫자만 입력 가능합니다.</div>}
      </div>
    </div>
  );
}

export default CardCVCInput;
