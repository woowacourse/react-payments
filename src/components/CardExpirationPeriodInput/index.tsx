import {
  ChangeEvent,
  FocusEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

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
import Input from '../Input';
import InputErrorMessage from '../InputErrorMessage';

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
type Period = 'month' | 'year';

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

  const currentDate = useMemo(() => {
    const today = new Date();

    return {
      year: today.getFullYear() - CENTURY_PREFIX,
      month: today.getMonth() + 1,
    };
  }, []);

  const errorMessage = useMemo(() => {
    const { cardExpirationPeriod } = ERROR_MESSAGE;

    if (error.availability) return cardExpirationPeriod.availability;
    if (error.month) return cardExpirationPeriod.month;
    if (error.year) return cardExpirationPeriod.year;

    return undefined;
  }, [error]);
  // 유효기간 검사
  /**
   * month,year을 모두 고려해 현재 기준으로 사용가능한 카드인지 확인하는 함수
   * @returns
   */
  const validateCardExpiry = (newCardPeriod: CardPeriod) => {
    if (!newCardPeriod.year || !newCardPeriod.month) return;

    const { year, month } = currentDate;
    const cardYear = Number(newCardPeriod.year);
    const isOverYear = cardYear > year;
    const isOverMonth =
      cardYear === year && Number(newCardPeriod.month) >= month;

    return isOverYear || isOverMonth;
  };

  const validateMonthAndYear = (newCardPeriod: CardPeriod, key: Period) => {
    const value = newCardPeriod[key];
    if (!value) return;
    // value 가 ''이거나 정규식을 통과하지 못하면 유효하지 않음
    return value ? CARD_PERIOD_REGEXP[key].test(value) : false;
  };

  const validateCardPeriod = (
    event: ChangeEvent<HTMLInputElement>,
    newCardPeriod: CardPeriod,
  ) => {
    const { name } = event.target;
    if (!(name === 'month' || name === 'year')) return;

    const isValidatedMonthAndYear = validateMonthAndYear(newCardPeriod, name);
    const isValidatedExpiry = validateCardExpiry(newCardPeriod);

    setError({
      ...error,
      [name]: !isValidatedMonthAndYear,
      availability: !isValidatedExpiry,
    });
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
    // 유효성 검사
    validateCardPeriod(event, newCardPeriod);
  };
  /**
   * input의 포커스가 나갔을때, value가 한자리 수 이면 앞에 0을 붙여주는 기능
   * @param event
   */
  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // value의 값이 유의미한 값이고, 문자 길이가 2자리 이하일때 value 변경
    if (!value || value.length > MIN_NUMBER_OF_VALUE) return;

    const text = value !== ZERO ? convertToTwoDigits(Number(value)) : value;
    updateCardPeriod(name, text);
  };

  const handleEditCardPeriod = useCallback(() => {
    if (error.month || error.year) return;

    editCardPeriod(cardPeriod);
  }, [error, cardPeriod, editCardPeriod]);

  useEffect(() => {
    handleEditCardPeriod();
  }, [error, cardPeriod]);

  return (
    <CardInputContainer title={title} subTitle={subTitle}>
      <CardInput label={label}>
        <div
          className={styles.inputWrap}
          onChange={handleChange}
          onBlur={handleBlur}
        >
          <Input
            name="month"
            type="number"
            placeholder={monthPlaceholder}
            label="카드 유효 기간-월"
            value={cardPeriod.month || undefined}
            error={error.month || error.availability}
          />
          <Input
            name="year"
            type="number"
            label="카드 유효 기간-연도"
            placeholder={yearPlaceholder}
            value={cardPeriod.year || undefined}
            error={error.year || error.availability}
          />
        </div>
        <InputErrorMessage>
          {errorMessage?.split('\n').map((item) => <p>{item}</p>)}
        </InputErrorMessage>
      </CardInput>
    </CardInputContainer>
  );
}
