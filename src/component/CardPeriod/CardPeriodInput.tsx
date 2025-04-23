import Input from '../@common/Input/Input';
import Title from "../@common/Title/Title";
import { ChangeEvent } from 'react';
import { CardExpirationDate, CardExpirationDateError } from "../../types";
import { errorInputStyle, errorMessageStyle } from '../../styles/@common/text.style';
import { inputContainer, inputSection } from '../../styles/@common/inputContainer.style';
import { cardPeriodInputLayout } from './CardPeriodInput.style';
import { CARD_EXPIRATION_ERROR, CARD_EXPIRATION } from '../../constants';

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
      <Title title='카드 유효기간을 입력해 주세요' subTitle='월/년도(MMYY)를 순서대로 입력해 주세요.'/>
      <Input.Group id="card-expiration">
        <div css={inputContainer}>
          <Input.Label>유효기간</Input.Label>
          <article css={inputSection}>
            <Input.Group id="card-expiration">
              <Input
                type="text"
                name="month"
                maxLength={CARD_EXPIRATION.monthLength}
                value={cardExpirationDate.month}
                onChange={onChange}
                css={errorState.month ? errorInputStyle : undefined}
              />
            </Input.Group>
            <Input.Group id="card-expiration-year">
              <Input
                type="text"
                name="year"
                maxLength={CARD_EXPIRATION.yearLength}
                value={cardExpirationDate.year}
                onChange={onChange}
                css={errorState.year ? errorInputStyle : undefined}
              />
            </Input.Group>
          </article>
          {errorState.month && (
            <div css={errorMessageStyle}>{getMonthError()}</div>
          )}
          {errorState.year && !errorState.month && (
            <div css={errorMessageStyle}>{getYearError()}</div>
          )}
        </div>
      </Input.Group>
    </div>
  );
}

export default CardPeriodInput;
