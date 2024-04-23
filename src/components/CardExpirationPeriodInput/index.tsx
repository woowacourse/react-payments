import { ChangeEvent, FocusEvent, useMemo, useState } from 'react';

import {
  CARD_EXPIRATION,
  CARD_EXPIRATION_PERIOD_FORM_MESSAGE,
  CARD_PERIOD_REGEXP,
  ERROR_MESSAGE,
} from '../../constants';
import { CardPeriod } from '../../modules/useCardInfoReducer';
import { convertToTwoDigits, sliceText } from '../../utils/textChangerUtils';
import CardInputSection from '../CardInputSection';
import Input from '../Input';
import ErrorMessage from '../ErrorMessage';

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

  const [periodError, setPeriodError] = useState<PeriodError>(INITIAL_ERROR);
  /**
   * 오늘 기준 연도,월
   */
  const currentDate = useMemo(() => {
    const today = new Date();

    return {
      year: today.getFullYear() - CENTURY_PREFIX,
      month: today.getMonth() + 1,
    };
  }, []);

  const errorMessage = useMemo(() => {
    const { cardExpirationPeriod } = ERROR_MESSAGE;

    if (periodError.availability) return cardExpirationPeriod.availability;
    if (periodError.month) return cardExpirationPeriod.month;
    if (periodError.year) return cardExpirationPeriod.year;

    return undefined;
  }, [periodError]);

  /**
   * 유효기간에 오류가 없을 때 cardInfo의 period 수정하는 함수
   */
  const handleEditCardPeriod = (
    newPeriodError: PeriodError | undefined,
    newCardPeriod: CardPeriod,
  ) => {
    // 유효기간의 오류 확인
    if (!newPeriodError) return;

    const isErrorInPeriod = Object.entries(newPeriodError).some(
      ([_, error]) => error,
    );
    if (isErrorInPeriod) return;
    // 오류 없을 시 cardInfo 업데이트
    editCardPeriod(newCardPeriod);
  };

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

  /**
   * 변경된 month, year의 형식에 대한 유효성 검사
   * @param newCardPeriod  입력값 변경에 따른 새로운 cardPeriod
   * @param key change 이벤트가 발생한 input의 name으로, key에 따라 유효성 검사 대상이 정해짐
   */
  const validateMonthAndYear = (newCardPeriod: CardPeriod, key: Period) => {
    const value = newCardPeriod[key];
    if (!value) return;
    // value 가 ''이거나 정규식을 통과하지 못하면 유효하지 않음
    return value ? CARD_PERIOD_REGEXP[key].test(value) : false;
  };

  /**
   * 카드의 기간에 대한 유효성 검사(카드 유효기간(월,연도)와 사용가능성 여부)를 진행한 후 그 값에 따라 periodError 상태를 업데이트함
   * @param name  change 이벤트가 발생한 input의 name
   * @param newCardPeriod 입력값 변경에 따른 새로운 cardPeriod
   * @returns   name 타입이 맞는 경우에는 변경된 periodError 반환하고 그렇지 않은 경우에는 undefined를 반환
   */
  const updatePeriodError = (name: string, newCardPeriod: CardPeriod) => {
    if (!(name === 'month' || name === 'year')) return;

    const isValidatedMonthAndYear = validateMonthAndYear(newCardPeriod, name);
    const isValidatedExpiry = validateCardExpiry(newCardPeriod);
    const newPeriodError: PeriodError = {
      ...periodError,
      [name]: !isValidatedMonthAndYear,
      availability: !isValidatedExpiry,
    };
    setPeriodError(newPeriodError);

    return newPeriodError;
  };

  /**
   * 변경된 month,year에 대한 입력값을 바탕으로 cardPeriod,periodError,cardInfo의 period를 변경하는 함수
   * @param name input의 name
   * @param value 월,연도의 변경된 입력값
   */
  const updateCardPeriodAndError = (name: string, value: string) => {
    // cardPeriod 업데이트
    const newCardPeriod = { ...cardPeriod, [name]: sliceText(value, length) };
    setCardPeriod(newCardPeriod);
    // periodError 업데이트
    const newPeriodError = updatePeriodError(name, newCardPeriod);
    // cardInfo 업데이트
    handleEditCardPeriod(newPeriodError, newCardPeriod);
  };

  const handlePeriodChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (Number.isNaN(value)) return;

    updateCardPeriodAndError(name, value);
  };
  /**
   * input의 포커스가 나갔을때, value가 한자리 수 이면 앞에 0을 붙여주는 기능
   * @param event
   */
  const handlePeriodBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // value의 값이 유의미한 값이고, 문자 길이가 2자리 이하일때 value 변경
    if (!value || value.length > MIN_NUMBER_OF_VALUE) return;

    const text = value !== ZERO ? convertToTwoDigits(Number(value)) : value;
    updateCardPeriodAndError(name, text);
  };

  return (
    <CardInputSection title={title} subTitle={subTitle} childrenLabel={label}>
      <div
        className={styles.inputWrap}
        onChange={handlePeriodChange}
        onBlur={handlePeriodBlur}
      >
        <Input
          name="month"
          type="number"
          placeholder={monthPlaceholder}
          label="카드 유효 기간-월"
          value={cardPeriod.month || undefined}
          error={periodError.month || periodError.availability}
        />
        <Input
          name="year"
          type="number"
          label="카드 유효 기간-연도"
          placeholder={yearPlaceholder}
          value={cardPeriod.year || undefined}
          error={periodError.year || periodError.availability}
        />
      </div>
      <ErrorMessage>
        {errorMessage?.split('\n').map((item) => <p>{item}</p>)}
      </ErrorMessage>
    </CardInputSection>
  );
}
