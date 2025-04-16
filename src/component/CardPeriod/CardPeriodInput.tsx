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
} from '../CardNumberInput/CardNumberInput.style';
import { cardPeriodInputLayout } from './CardPeriodInput.style';

type CardPeriodInputProps = {
  cardExpirationDate: {
    month: string;
    year: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorState: {
    month: boolean;
    year: boolean;
  };
};

function CardPeriodInput({
  cardExpirationDate,
  onChange,
  errorState,
}: CardPeriodInputProps) {
  const getMonthErrorMessage = () => {
    if (!errorState.month) return null;

    const monthValue = Number(cardExpirationDate.month);

    if (!cardExpirationDate.month || isNaN(monthValue)) {
      return '숫자만 입력 가능합니다.';
    }

    if (monthValue < 1 || monthValue > 12) {
      return '1~12 사이의 값을 입력해 주세요.';
    }
  };

  const getYearErrorMessage = () => {
    if (!errorState.year) return null;

    const yearValue = Number(cardExpirationDate.year);

    if (!cardExpirationDate.year || isNaN(yearValue)) {
      return '숫자만 입력 가능합니다.';
    }

    if (yearValue < 25) {
      return '25년 이상의 값을 입력해 주세요.';
    }
  };

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
            css={errorState.month ? errorInputStyle : undefined}
          />
          <Input
            type="text"
            name="year"
            maxLength={2}
            value={cardExpirationDate.year}
            onChange={onChange}
            css={errorState.year ? errorInputStyle : undefined}
          />
        </article>
        {errorState.month && (
          <div css={errorMessageStyle}>{getMonthErrorMessage()}</div>
        )}
        {errorState.year && !errorState.month && (
          <div css={errorMessageStyle}>{getYearErrorMessage()}</div>
        )}
      </div>
    </div>
  );
}

export default CardPeriodInput;
