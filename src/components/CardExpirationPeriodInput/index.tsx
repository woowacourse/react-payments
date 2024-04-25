import { ChangeEvent, FocusEvent, useMemo } from 'react';

import {
  CARD_EXPIRATION,
  CARD_EXPIRATION_PERIOD_FORM_MESSAGE,
  CARD_FORM_STEP,
  CARD_PERIOD_REGEXP,
  ERROR_MESSAGE,
  FIRST_INPUT_INDEX,
} from '../../constants';
import useFocusRef from '../../hooks/useFocusRef';
import useInput from '../../hooks/useInput';
import { CardPeriod } from '../../modules/useCardInfoReducer';
import { convertToTwoDigits } from '../../utils/textChangerUtils';
import CardInputSection from '../CardInputSection';
import ErrorMessage from '../ErrorMessage';
import Input from '../Input';

import styles from './style.module.css';

interface PeriodError {
  month: boolean;
  year: boolean;
  availability: boolean;
}

export interface CardExpirationPeriodFormProps {
  editCardPeriod: (period: CardPeriod) => void;
  goNextFormStep: (currentStep: number) => void;
}

const ZERO = '0';
const CENTURY_PREFIX = 2000;
const MIN_NUMBER_OF_VALUE = 1;

export default function CardExpirationPeriodInput(
  props: CardExpirationPeriodFormProps,
) {
  const { editCardPeriod, goNextFormStep } = props;
  const { title, subTitle, label, yearPlaceholder, monthPlaceholder } =
    CARD_EXPIRATION_PERIOD_FORM_MESSAGE;
  const { focusTargetRef } = useFocusRef<HTMLDivElement>(FIRST_INPUT_INDEX);

  const INITIAL_ERROR: PeriodError = {
    month: false,
    year: false,
    availability: false,
  };
  const INITIAL_VALUE: CardPeriod = {
    month: null,
    year: null,
  };
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

  /**
   * 유효기간에 오류가 없을 때 cardInfo의 period 수정하는 함수
   */
  const updateCardPeriod = (value: CardPeriod, error: PeriodError) => {
    // 오류가 없는 기간만 업데이트
    editCardPeriod({
      month: error.month ? null : value.month,
      year: error.year ? null : value.year,
    });
  };
  /**
   * 다음 임력 필드 단계로 넘어갈 수 있는 지 여부를 확인 후 이를 반환
   * @param newPeriodError : 카드 유효 기간 오류
   */
  const isNextStepEnabled = (newPeriodError: PeriodError) => {
    const isNoneError = Object.values(newPeriodError).every((i) => !i);

    return isNoneError;
  };
  /**
   * 오류가 없을 경우, 다음 입력 필드 단계로 이동
   * @param error
   */
  const handleGoNextFormStep = (error: PeriodError) => {
    if (isNextStepEnabled(error)) goNextFormStep(CARD_FORM_STEP.period);
  };

  /**
   * month,year을 모두 고려해 현재 기준으로 사용 가능한 카드인지 확인하는 함수
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
   * @param isValidatedExpiry 현재 입력한 카드 월,연도를 바탕으로 확인한 카드 사용 가능성 여부
   */
  const validateMonthAndYear = (
    newCardPeriod: CardPeriod,
    isValidatedExpiry: boolean | undefined,
  ) => {
    const { month, year } = newCardPeriod;

    const newPeriodError: PeriodError = {
      month: month ? !CARD_PERIOD_REGEXP.month.test(month) : true,
      year: year ? !CARD_PERIOD_REGEXP.year.test(year) : true,
      availability: !isValidatedExpiry,
    };

    return newPeriodError;
  };

  /**
   * 카드의 기간에 대한 유효성 검사(카드 유효기간(월,연도)와 사용가능성 여부)를 진행한 후 그 값을 반환
   * @param newCardPeriod 입력값 변경에 따른 새로운 cardPeriod
   */
  const validateCardPeriod = (newCardPeriod: CardPeriod) => {
    const isValidatedExpiry = validateCardExpiry(newCardPeriod);
    const newPeriodError = validateMonthAndYear(
      newCardPeriod,
      isValidatedExpiry,
    );

    return { newError: newPeriodError };
  };

  const { value, setValue, error } = useInput<CardPeriod, PeriodError>({
    initialValue: INITIAL_VALUE,
    initialError: INITIAL_ERROR,
    validateValue: validateCardPeriod,
    updatedInfo: updateCardPeriod,
    handleGoNextFormStep,
  });

  const errorMessage = useMemo(() => {
    const { cardExpirationPeriod } = ERROR_MESSAGE;

    if (error.availability) return cardExpirationPeriod.availability;
    if (error.month) return cardExpirationPeriod.month;
    if (error.year) return cardExpirationPeriod.year;

    return undefined;
  }, [error]);

  /**
   * 변경된 month,year에 대한 입력값을 바탕으로 cardPeriod,periodError,cardInfo의 period를 변경하는 함수
   * @param name input의 name
   * @param text 월,연도의 변경된 입력값
   */
  const changeCardPeriodValue = (name: string, text: string) => {
    // cardPeriod 업데이트
    const newCardPeriod = {
      ...value,
      [name]: text,
    };
    setValue(newCardPeriod);
  };

  const handlePeriodChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;

    changeCardPeriodValue(name, event.target.value);
  };
  /**
   * input의 포커스가 나갔을때, value가 한자리 수 이면 앞에 0을 붙여주는 기능
   * @param event
   */
  const handlePeriodBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { name } = event.target;
    const targetValue = event.target.value;
    // value의 값이 유의미한 값이고, 문자 길이가 2자리 이하일때 value 변경
    if (!targetValue || targetValue.length > MIN_NUMBER_OF_VALUE) return;

    const text =
      targetValue !== ZERO ? convertToTwoDigits(targetValue) : targetValue;
    changeCardPeriodValue(name, text);
  };

  return (
    <CardInputSection title={title} subTitle={subTitle} childrenLabel={label}>
      <div
        className={styles.inputWrap}
        onChange={handlePeriodChange}
        onBlur={handlePeriodBlur}
        ref={focusTargetRef}
      >
        <Input
          name="month"
          type="text"
          maxLength={CARD_EXPIRATION.length}
          placeholder={monthPlaceholder}
          label="카드 유효 기간-월"
          value={value.month?.toString() || undefined}
          error={error.month || error.availability}
        />
        <Input
          name="year"
          type="text"
          label="카드 유효 기간-연도"
          placeholder={yearPlaceholder}
          maxLength={CARD_EXPIRATION.length}
          value={value.year?.toString() || undefined}
          error={error.year || error.availability}
        />
      </div>
      <ErrorMessage>
        {errorMessage?.split('\n').map((item) => <p>{item}</p>)}
      </ErrorMessage>
    </CardInputSection>
  );
}
