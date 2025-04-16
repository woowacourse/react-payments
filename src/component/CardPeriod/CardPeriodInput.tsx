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

function CardPeriodInput() {
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
          <Input />
          <Input />
        </article>
      </div>
    </div>
  );
}

export default CardPeriodInput;
