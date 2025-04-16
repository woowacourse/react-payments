import { ChangeEvent } from 'react';
import {
  errorInputStyle,
  errorMessageStyle,
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
    first: number | null;
    second: number | null;
    third: number | null;
    forth: number | null;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorState: {
    first: boolean;
    second: boolean;
    third: boolean;
    forth: boolean;
  };
};

function CardNumberInput({
  cardNumber,
  onChange,
  errorState,
}: CardNumberInputProps) {
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
            value={cardNumber.first?.toString()}
            onChange={onChange}
            css={errorState.first ? errorInputStyle : undefined}
          />
          <Input
            type="text"
            name="second"
            maxLength={4}
            value={cardNumber.second?.toString()}
            onChange={onChange}
            css={errorState.second ? errorInputStyle : undefined}
          />
          <Input
            type="text"
            name="third"
            maxLength={4}
            value={cardNumber.third?.toString()}
            onChange={onChange}
            css={errorState.third ? errorInputStyle : undefined}
          />
          <Input
            type="text"
            name="forth"
            maxLength={4}
            value={cardNumber.forth?.toString()}
            onChange={onChange}
            css={errorState.forth ? errorInputStyle : undefined}
          />
        </article>
        {(errorState.first ||
          errorState.second ||
          errorState.third ||
          errorState.forth) && (
          <div css={errorMessageStyle}>숫자만 입력 가능합니다.</div>
        )}
      </div>
    </div>
  );
}

export default CardNumberInput;
