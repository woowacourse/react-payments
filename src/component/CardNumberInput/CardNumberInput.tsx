import {
  sectionTitle,
  sectionTitleSubText,
  sectionTitleText,
} from '../../styles/@common/text/text.style';
import Input from '../@common/Input/Input';
import {
  cardNumberInputContainer,
  cardNumberInputInputContainer,
  cardNumberInputLayout,
} from './CardNumberInput.style';

function CardNumberInput() {
  return (
    <div css={cardNumberInputLayout}>
      <div css={sectionTitle}>
        <span css={sectionTitleText}>결제할 카드 번호를 입력해 주세요</span>
        <span css={sectionTitleSubText}>
          본인 명의의 카드만 결제 가능합니다.
        </span>
      </div>
      <div css={cardNumberInputContainer}>
        <Input.Label>카드 번호</Input.Label>
        <article css={cardNumberInputInputContainer}>
          <Input />
          <Input />
          <Input />
          <Input />
        </article>
      </div>
    </div>
  );
}

export default CardNumberInput;
