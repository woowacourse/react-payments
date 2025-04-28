import Input from '../@common/Input/Input';
import Title from "../@common/Title/Title";
import React, { ChangeEvent } from 'react';
import { CardExpirationDate, CardExpirationDateError } from "../../types";
import { errorInputStyle, errorMessageStyle } from '../../styles/@common/text.style';
import { inputContainer, inputSection } from '../../styles/@common/inputContainer.style';
import { cardPeriodInputLayout } from './CardPeriodInput.style';
import { CARD_EXPIRATION } from '../../constants';

type CardPeriodInputProps = {
  cardExpirationDate: CardExpirationDate;
  error: CardExpirationDateError;
  monthRef: React.RefObject<HTMLInputElement | null>;
  yearRef: React.RefObject<HTMLInputElement | null>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  tabIndex?: number;
  autoFocus?: boolean;
};

function CardPeriodInput({
  cardExpirationDate,
  error,
  monthRef,
  yearRef,
  onChange,
  onKeyDown,
  tabIndex,
  autoFocus
}: CardPeriodInputProps) {
  const errorMessage = error.month || error.year;

  return (
    <div css={cardPeriodInputLayout}>
      <Title title='카드 유효기간을 입력해 주세요' subTitle='월/년도(MMYY)를 순서대로 입력해 주세요.'/>
      <Input.Group id="card-expiration">
        <div css={inputContainer}>
          <Input.Label>유효기간</Input.Label>
          <article css={inputSection}>
            <Input.Group id="card-expiration">
              <Input
                ref={monthRef}
                type="text"
                name="month"
                value={cardExpirationDate.month}
                maxLength={CARD_EXPIRATION.monthLength}
                onChange={onChange}
                onKeyDown={onKeyDown}
                css={error.month ? errorInputStyle : undefined}
                tabIndex={tabIndex ? tabIndex + 1: undefined}
                autoFocus={autoFocus}
              />
            </Input.Group>
            <Input.Group id="card-expiration-year">
              <Input
                ref={yearRef}
                type="text"
                name="year"
                value={cardExpirationDate.year}
                maxLength={CARD_EXPIRATION.yearLength}
                onChange={onChange}
                onKeyDown={onKeyDown}
                css={error.year ? errorInputStyle : undefined}
                tabIndex={tabIndex ? tabIndex + 2: undefined}
              />
            </Input.Group>
          </article>
          {
            errorMessage && (
            <div css={errorMessageStyle}>{errorMessage}</div>)
          }
        </div>
      </Input.Group>
    </div>
  );
}

export default CardPeriodInput;
