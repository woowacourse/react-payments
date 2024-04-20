import { ChangeEvent, FocusEvent, useEffect, useState } from 'react';

import {
  CARD_EXPIRATION,
  CARD_EXPIRATION_PERIOD_FORM_MESSAGE,
  CARD_PERIOD_REGEXP,
  ERROR_MESSAGE,
} from '../../constants';
import { CardPeriod } from '../../modules/useCardInfoReducer';
import { convertToTwoDigits, sliceText } from '../../utils/textChangerUtils';
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
  month: string | null;
  year: string | null;
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
    month: null,
    year: null,
  });

  const INITIAL_ERROR = {
    month: false,
    year: false,
    availability: false,
  };
  const [error, setError] = useState<PeriodError>(INITIAL_ERROR);

  const today = new Date();
  const year = today.getFullYear() - CENTURY_PREFIX;
  const month = today.getMonth() + 1;
  // 유효기간 검사
  /**
   * month,year을 모두 고려해 현재 기준으로 사용가능한 카드인지 확인하는 함수
   * @returns
   */
  const validateCardExpiry = (newCardPeriod: CardPeriod) => {
    if (!newCardPeriod.year || !newCardPeriod.month) return;
    const cardYear = Number(newCardPeriod.year);
    const isOverYear = cardYear > year;
    const isOverMonth =
      cardYear === year && Number(newCardPeriod.month) >= month;

    const isValidated = isOverYear || isOverMonth;

    if (isValidated) {
      setError(INITIAL_ERROR);
      return;
    }

    setError((prev) => ({
      ...prev,
      availability: true,
    }));
  };

  const validateMonth = (newCardPeriod: CardPeriod) => {
    const isValidated = newCardPeriod.month
      ? CARD_PERIOD_REGEXP.month.test(newCardPeriod.month)
      : false;

    setError((prev) => ({
      ...prev,
      month: !isValidated,
    }));
  };

  const validateYear = (newCardPeriod: CardPeriod) => {
    const isValidated = newCardPeriod.year
      ? CARD_PERIOD_REGEXP.year.test(newCardPeriod.year)
      : false;

    setError((prev) => ({
      ...prev,
      year: !isValidated,
    }));
  };

  const validateCardPeriod = (
    event: ChangeEvent<HTMLInputElement>,
    newCardPeriod: CardPeriod,
  ) => {
    if (!(event.target instanceof HTMLInputElement)) return;
    const { name } = event.target;

    if (name === 'month') {
      validateMonth(newCardPeriod);
    }

    if (name === 'year') {
      validateYear(newCardPeriod);
    }

    validateCardExpiry(newCardPeriod);
  };

  const updateCardPeriod = (name: string, value: string) => {
    const newCardPeriod = { ...cardPeriod, [name]: sliceText(value, length) };

    setCardPeriod(newCardPeriod);

    return newCardPeriod;
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (Number.isNaN(value)) return;

    // cardPeriod 업데이트
    const newCardPeriod = updateCardPeriod(name, value);
    if (!newCardPeriod) return;
    // 유효성 검사
    validateCardPeriod(event, newCardPeriod);
  };
  /**
   * input의 포커스가 나갔을때, value가 한자리 수 이면 앞에 0을 붙여주는 기능
   * @param event
   */
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (!value || value.length > MIN_NUMBER_OF_VALUE) return;

    const text = value !== ZERO ? convertToTwoDigits(Number(value)) : value;
    updateCardPeriod(name, text);
  };

  const handleEditCardPeriod = () => {
    if (error.month || error.year) return;

    editCardPeriod(cardPeriod);
  };

  const getErrorMessage = () => {
    const { cardExpirationPeriod } = ERROR_MESSAGE;

    if (error.availability) return cardExpirationPeriod.availability;
    if (error.month) return cardExpirationPeriod.month;
    if (error.year) return cardExpirationPeriod.year;

    return undefined;
  };

  useEffect(() => {
    if (cardPeriod.month || cardPeriod.year) {
      handleEditCardPeriod();
    }
  }, [cardPeriod]);

  return (
    <CardInputContainer title={title} subTitle={subTitle}>
      <CardInput label={label}>
        <div>
          <div
            className={styles.inputWrap}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            <Input
              name="month"
              type="number"
              placeholder={monthPlaceholder}
              value={cardPeriod.month || undefined}
              error={error.month || error.availability}
            />
            <Input
              name="year"
              type="number"
              placeholder={yearPlaceholder}
              value={cardPeriod.year || undefined}
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
