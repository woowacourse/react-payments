import { ChangeEvent } from 'react';
import {
  sectionTitle,
  sectionTitleSubText,
  sectionTitleText,
} from '../../styles/@common/text/text.style';
import Input from '../@common/Input/Input';
import {
  cardNumberInputContainer,
  cardNumberInputInputContainer,
} from '../CardNumberInput/CardNumberInput.style';
import { cardPeriodInputLayout } from './CardPeriodInput.style';

type CardPeriodInputProps = {
  cardExpirationDate: {
    month: string;
    year: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function CardPeriodInput({
  cardExpirationDate,
  onChange,
}: CardPeriodInputProps) {
  return (
    <div css={cardPeriodInputLayout}>
      <div css={sectionTitle}>
        <span css={sectionTitleText}>카드 유효기간을 입력해 주세요</span>
        <span css={sectionTitleSubText}>
          월/년도(MMYY)를 순서대로 입력해 주세요.
        </span>
      </div>
      <div css={cardNumberInputContainer}>
        <Input.Label>유효기간</Input.Label>
        <article css={cardNumberInputInputContainer}>
          <Input
            type="text"
            name="month"
            maxLength={2}
            value={cardExpirationDate.month}
            onChange={onChange}
          />
          <Input
            type="text"
            name="year"
            maxLength={2}
            value={cardExpirationDate.year}
            onChange={onChange}
          />
        </article>
      </div>
    </div>
  );
}

export default CardPeriodInput;
