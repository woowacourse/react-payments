import Input from '../@common/Input/Input';
import { ChangeEvent } from 'react';
import {
  errorInputStyle,
  errorMessageStyle,
  sectionTitle,
  sectionTitleSubText,
  sectionTitleText,
} from '../../styles/@common/text/text.style';

import { cardPeriodInputLayout } from './CardPeriodInput.style';
import { CardExpirationDate, CardExpirationDateError } from '../../hooks';
import { CARD_EXPIRATION_ERROR, CARD_EXPIRATION } from '../../constants';
import {
  inputContainer,
  inputSection,
} from '../../styles/@common/inputContainer.style';

type CardPeriodInputProps = {
  cardExpirationDate: CardExpirationDate;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  errorState: CardExpirationDateError;
  getMonthErrorMessage?: () => string | null | undefined;
  getYearErrorMessage?: () => string | null | undefined;
};

function CardPeriodInput({
  cardExpirationDate,
  onChange,
  errorState,
  getMonthErrorMessage,
  getYearErrorMessage,
}: CardPeriodInputProps) {
  const getMonthError =
    getMonthErrorMessage ||
    (() => {
      if (!errorState.month) return null;

      const monthValue = Number(cardExpirationDate.month);

      if (!cardExpirationDate.month || isNaN(monthValue)) {
        return CARD_EXPIRATION_ERROR.onlyNumbers;
      }

      if (
        monthValue < CARD_EXPIRATION.minMonth ||
        monthValue > CARD_EXPIRATION.maxMonth
      ) {
        return CARD_EXPIRATION_ERROR.invalidMonth;
      }

      return null;
    });

  const getYearError =
    getYearErrorMessage ||
    (() => {
      if (!errorState.year) return null;

      const yearValue = Number(cardExpirationDate.year);

      if (!cardExpirationDate.year || isNaN(yearValue)) {
        return CARD_EXPIRATION_ERROR.onlyNumbers;
      }

      if (yearValue < CARD_EXPIRATION.minYear) {
        return CARD_EXPIRATION_ERROR.invalidYear;
      }

      return null;
    });

  return (
    <div css={cardPeriodInputLayout}>
      <div css={sectionTitle}>
        <span css={sectionTitleText}>카드 유효기간을 입력해 주세요</span>
        <span css={sectionTitleSubText}>
          월/년도(MMYY)를 순서대로 입력해 주세요.
        </span>
      </div>
      <div css={inputContainer}>
        <Input.Label>유효기간</Input.Label>
        <article css={inputSection}>
          <Input
            type="text"
            name="month"
            maxLength={CARD_EXPIRATION.monthLength}
            value={cardExpirationDate.month}
            onChange={onChange}
            css={errorState.month ? errorInputStyle : undefined}
          />
          <Input
            type="text"
            name="year"
            maxLength={CARD_EXPIRATION.yearLength}
            value={cardExpirationDate.year}
            onChange={onChange}
            css={errorState.year ? errorInputStyle : undefined}
          />
        </article>
        {errorState.month && (
          <div css={errorMessageStyle}>{getMonthError()}</div>
        )}
        {errorState.year && !errorState.month && (
          <div css={errorMessageStyle}>{getYearError()}</div>
        )}
      </div>
    </div>
  );
}

export default CardPeriodInput;
