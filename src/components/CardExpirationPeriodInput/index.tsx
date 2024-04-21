import { ChangeEvent, useEffect, useState } from 'react';

import {
  CARD_EXPIRATION_PERIOD_FORM_MESSAGE,
  ERROR_MESSAGE,
  INPUT_LENGTH,
} from '../../constants';
import { CardPeriod } from '../../modules/useCardInfoReducer';
import debounceFunc from '../../utils/debounceFunc';
import CardInput from '../CardInput';
import CardInputContainer from '../CardInputContainer';
import Input from '../common/Input';
import FormErrorMessage from '../FormErrorMessage';

import styles from './style.module.css';

interface PeriodError {
  month: boolean;
  year: boolean;
  availability: boolean;
}

interface CardExpirationPeriod {
  month: number | undefined;
  year: number | undefined;
}

interface CardExpirationPeriodFormProps {
  editCardPeriod: (period: CardPeriod) => void;
}

export default function CardExpirationPeriodInput(
  props: CardExpirationPeriodFormProps,
) {
  const { editCardPeriod } = props;
  const { title, subTitle, label, yearPlaceholder, monthPlaceholder } =
    CARD_EXPIRATION_PERIOD_FORM_MESSAGE;

  const [cardPeriod, setCardPeriod] = useState<CardExpirationPeriod>({
    month: undefined,
    year: undefined,
  });

  const INITIAL_ERROR = {
    month: false,
    year: false,
    availability: false,
  };
  const [error, setError] = useState<PeriodError>(INITIAL_ERROR);

  const today = new Date();
  const year = today.getFullYear() - 2000;
  const month = today.getMonth() + 1;

  const validatePeriod = () => {
    if (!cardPeriod.year || !cardPeriod.month) return;

    const isOverYear = cardPeriod.year > year;
    const isOverMonth = cardPeriod.year === year && cardPeriod.month >= month;
    const isOverPeriod = isOverYear || isOverMonth;

    if (isOverPeriod) {
      setError(INITIAL_ERROR);
      return;
    }

    setError({
      month: true,
      year: true,
      availability: true,
    });
  };

  const validateMonth = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const regex = /^([0-9]{1,2})$/;
    const isValidated = regex.test(value);

    debounceFunc(() => {
      setError({
        month: !isValidated,
        year: !cardPeriod.year,
        availability: error.availability,
      });

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
      setError({
        month: !cardPeriod.month,
        year: !isValidated,
        availability: error.availability,
      });
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
    if (error.month || error.year) return;

    const cardMonth = convertToTwoDigits(cardPeriod.month);
    const cardYear = convertToTwoDigits(cardPeriod.year);
    editCardPeriod({ month: cardMonth, year: cardYear });
  };

  const getErrorMessage = () => {
    if (error.availability) return ERROR_MESSAGE.cardExpirationPeriod.period;

    if (error.month || error.year)
      return ERROR_MESSAGE.cardExpirationPeriod.number;

    return undefined;
  };

  useEffect(() => {
    validatePeriod();
    if (cardPeriod.month || cardPeriod.year) {
      handleEditCardPeriod();
    }
  }, [cardPeriod]);

  return (
    <CardInputContainer title={title} subTitle={subTitle}>
      <CardInput label={label}>
        <div>
          <div className={styles.inputWrap} onChange={handleInputChange}>
            <Input
              name="month"
              type="text"
              placeholder={monthPlaceholder}
              error={error.month || error.availability}
              maxLength={INPUT_LENGTH.CARD_EXPIRATION}
            />
            <Input
              name="year"
              type="text"
              placeholder={yearPlaceholder}
              error={error.year || error.availability}
              maxLength={INPUT_LENGTH.CARD_EXPIRATION}
            />
          </div>
          <FormErrorMessage errorMessage={getErrorMessage()} />
        </div>
      </CardInput>
    </CardInputContainer>
  );
}
