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
  cardNumberInputLayout,
} from './CardNumberInput.style';

type CardNumberInputProps = {
  cardNumber: {
    first: string;
    second: string;
    third: string;
    forth: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

function CardNumberInput({ cardNumber, onChange }: CardNumberInputProps) {
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
          <Input
            type="text"
            name="first"
            maxLength={4}
            value={cardNumber.first}
            onChange={onChange}
          />
          <Input
            type="text"
            name="second"
            maxLength={4}
            value={cardNumber.second}
            onChange={onChange}
          />
          <Input
            type="text"
            name="third"
            maxLength={4}
            value={cardNumber.third}
            onChange={onChange}
          />
          <Input
            type="text"
            name="forth"
            maxLength={4}
            value={cardNumber.forth}
            onChange={onChange}
          />
        </article>
      </div>
    </div>
  );
}

export default CardNumberInput;
