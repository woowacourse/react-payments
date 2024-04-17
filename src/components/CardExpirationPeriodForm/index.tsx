import React, { ChangeEvent, useEffect, useState } from 'react';

import {
  CARD_EXPIRATION,
  CARD_EXPIRATION_PERIOD_FORM_MESSAGE,
  ERROR_MESSAGE,
} from '../../constants';
import { CardPeriod } from '../../modules/useCardInfoReducer';
import debounceFunc from '../../utils/debounceFunc';
import CardInputForm from '../CardInputForm';
import CardInputFormContainer from '../CardInputFormContainer';
import Input from '../Input';
import FormErrorMessage from '../FormErrorMessage';

type Error = 'number' | 'period' | null;
interface CardExpirationPeriodFormProps {
  editCardPeriod: (period: CardPeriod) => void;
}
export default function CardExpirationPeriodForm(
  props: CardExpirationPeriodFormProps,
) {
  const { editCardPeriod } = props;
  const { title, subTitle, label, yearPlaceholder, monthPlaceholder } =
    CARD_EXPIRATION_PERIOD_FORM_MESSAGE;
  const { length } = CARD_EXPIRATION;
  interface CardExpirationPeriod {
    month: number | undefined;
    year: number | undefined;
  }
  const [cardPeriod, setCardPeriod] = useState<CardExpirationPeriod>({
    month: undefined,
    year: undefined,
  });
  const [error, setError] = useState<Error>(null);
  const today = new Date();
  const year = today.getFullYear() - 2000;
  const month = today.getMonth() + 1;

  const validatePeriod = () => {
    if (!cardPeriod.year || !cardPeriod.month) return;

    const isOverYear = cardPeriod.year > year;
    const isOverMonth = cardPeriod.year === year && cardPeriod.month >= month;
    const isValidatedPeriod = isOverYear || isOverMonth;

    setError(isValidatedPeriod ? null : 'period');
  };

  const validateMonth = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const regex = /^([0-9]{2})$/;
    const isValidated = regex.test(value);

    debounceFunc(() => {
      setError(!isValidated ? 'number' : null);
      if (!isValidated) return;

      setCardPeriod((prev) => ({
        ...prev,
        month: value ? Number(value) : undefined,
      }));
    }, 10);
  };

  const validateYear = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const regex = /^\d{2}$/;
    const isValidated = regex.test(value);

    debounceFunc(() => {
      setError(!isValidated ? 'number' : null);
      if (!isValidated) return;

      setCardPeriod((prev) => ({
        ...prev,
        year: value ? Number(value) : undefined,
      }));
    }, 10);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const { name } = event.target;

    if (name === 'month') {
      validateMonth(event);
      return;
    }

    validateYear(event);
  };

  const convertToTwoDigits = (number: number | undefined) => {
    if (number === undefined) return;

    return number < 10 ? `0${number}` : number.toString();
  };

  const handleEditCardPeriod = () => {
    const cardMonth = convertToTwoDigits(cardPeriod.month);
    const cardYear = convertToTwoDigits(cardPeriod.year);
    editCardPeriod({ month: cardMonth, year: cardYear });
  };

  const getErrorMessage = () => {
    if (error === 'number') return ERROR_MESSAGE.cardExpirationPeriod.number;
    if (error === 'period') return ERROR_MESSAGE.cardExpirationPeriod.period;

    return undefined;
  };

  useEffect(() => {
    validatePeriod();
    if (cardPeriod.month || cardPeriod.year) {
      handleEditCardPeriod();
    }
  }, [cardPeriod]);

  return (
    <CardInputFormContainer title={title} subTitle={subTitle}>
      <CardInputForm label={label}>
        <div>
          <div onChange={handleInputChange}>
            <Input
              name="month"
              type="text"
              placeholder={monthPlaceholder}
              maxLength={length}
            />
            <Input
              name="year"
              type="text"
              placeholder={yearPlaceholder}
              maxLength={length}
            />
          </div>
          <FormErrorMessage errorMessage={getErrorMessage()} />
        </div>
      </CardInputForm>
    </CardInputFormContainer>
  );
}
