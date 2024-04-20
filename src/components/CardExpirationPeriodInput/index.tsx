import { ChangeEvent, useEffect, useState } from 'react';

import {
  CARD_EXPIRATION,
  CARD_EXPIRATION_PERIOD_FORM_MESSAGE,
  CARD_PERIOD_REGEXP,
  ERROR_MESSAGE,
} from '../../constants';
import { CardPeriod } from '../../modules/useCardInfoReducer';
import debounceFunc from '../../utils/debounceFunc';
import CardInput from '../CardInput';
import CardInputContainer from '../CardInputContainer';
import FormErrorMessage from '../FormErrorMessage';
import Input from '../Input';

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

const ZERO = '0';
const CENTURY_PREFIX = 2000;
const MIN_NUMBER_OF_VALUE = 1;

export default function CardExpirationPeriodInput(
  props: CardExpirationPeriodFormProps,
) {
  const { editCardPeriod } = props;
  const { title, subTitle, label, yearPlaceholder, monthPlaceholder } =
    CARD_EXPIRATION_PERIOD_FORM_MESSAGE;
  const { length } = CARD_EXPIRATION;

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
  const year = today.getFullYear() - CENTURY_PREFIX;
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
    const isValidated = CARD_PERIOD_REGEXP.year.test(value);
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
    if (value.length > MIN_NUMBER_OF_VALUE) return;

    const text = value !== ZERO ? convertToTwoDigits(Number(value)) : value;
  };

  const handleEditCardPeriod = () => {
    if (error.month || error.year) return;

    const cardMonth = convertToTwoDigits(cardPeriod.month);
    const cardYear = convertToTwoDigits(cardPeriod.year);
    editCardPeriod({ month: cardMonth, year: cardYear });
  };

  const getErrorMessage = () => {
    const { cardExpirationPeriod } = ERROR_MESSAGE;

    if (error.availability) return cardExpirationPeriod.availability;
    if (error.month) return cardExpirationPeriod.month;
    if (error.year) return cardExpirationPeriod.year;

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
              maxLength={length}
              error={error.month || error.availability}
            />
            <Input
              name="year"
              type="text"
              placeholder={yearPlaceholder}
              maxLength={length}
              error={error.year || error.availability}
            />
          </div>

          <FormErrorMessage>
            {getErrorMessage()
              ?.split('\n')
              .map((item) => <p>{item}</p>)}
          </FormErrorMessage>
        </div>
      </CardInput>
    </CardInputContainer>
  );
}
