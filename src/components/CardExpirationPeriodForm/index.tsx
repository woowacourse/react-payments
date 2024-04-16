import React, { ChangeEvent, useEffect, useState } from 'react';

import {
  CAR_EXPIRATION,
  CAR_EXPIRATION_PERIOD_FORM_MESSAGE,
  ERROR_MESSAGE,
} from '../../constants';
import CardInputForm from '../CardInputForm';
import CardInputFormContainer from '../CardInputFormContainer';
import Input from '../Input';

interface Card {
  month: number | undefined;
  year: number | undefined;
}
type Error = 'number' | 'period' | null;

export default function CardExpirationPeriodForm() {
  const { title, subTitle, label, yearPlaceholder, monthPlaceholder } =
    CAR_EXPIRATION_PERIOD_FORM_MESSAGE;
  const { length } = CAR_EXPIRATION;

  const [card, setCard] = useState<Card>({
    month: undefined,
    year: undefined,
  });
  const [error, setError] = useState<Error>(null);
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  const validatePeriod = () => {
    if (!card.year || !card.month) return;
    // 유효하지 않은 카드 기간
    // 카드 연도가 올해보다 이전 이거나
    // 카드 연도 === 올해, 카드 월 < 이번 달
    const isOverYear = card.year > year;
    const isOverMonth = card.year === year && card.month >= month;
    const isValidatedPeriod = isOverYear || isOverMonth;

    setError(isValidatedPeriod ? null : 'period');
  };

  const validateMonth = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const regex = /^(0[1-9]|1[0-2])$/;
    const isValidated = regex.test(value);

    if (!isValidated) {
      setError('number');
      return;
    }
    setCard((prev) => ({
      ...prev,
      month: Number(value),
    }));
  };

  const validateYear = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const regex = /^\d{2}$/;
    const isValidated = regex.test(value);

    if (!isValidated) {
      setError(isValidated ? null : 'number');
      return;
    }

    setCard((prev) => ({
      ...prev,
      year: Number(`20${value}`),
    }));
  };

  useEffect(() => {
    validatePeriod();
  }, [card]);

  return (
    <CardInputFormContainer title={title} subTitle={subTitle}>
      <CardInputForm label={label}>
        <>
          <Input
            type="text"
            placeholder={monthPlaceholder}
            maxLength={length}
            extraHandleChange={validateMonth}
          />

          <Input
            type="text"
            placeholder={yearPlaceholder}
            maxLength={length}
            extraHandleChange={validateYear}
          />
          <div>
            {error === 'number'
              ? ERROR_MESSAGE.cardExpirationPeriod.number
              : error === 'period'
                ? ERROR_MESSAGE.cardExpirationPeriod.period
                : ''}
          </div>
        </>
      </CardInputForm>
    </CardInputFormContainer>
  );
}
