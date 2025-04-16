import {
  sectionTitle,
  sectionTitleText,
} from '../../styles/@common/text/text.style';
import Input from '../@common/Input/Input';
import {
  cardNumberInputContainer,
  cardNumberInputInputContainer,
} from '../CardNumberInput/CardNumberInput.style';
import { cardPeriodInputLayout } from '../CardPeriod/CardPeriodInput.style';

function CvcInput() {
  return (
    <div css={cardPeriodInputLayout}>
      <div css={sectionTitle}>
        <span css={sectionTitleText}>CVC 번호를 입력해 주세요</span>
      </div>
      <div css={cardNumberInputContainer}>
        <Input.Label>CVC</Input.Label>
        <article css={cardNumberInputInputContainer}>
          <Input />
        </article>
      </div>
    </div>
  );
}

export default CvcInput;
