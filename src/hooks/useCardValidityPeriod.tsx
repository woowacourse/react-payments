import { useState } from 'react';

const PARSE_RULE = {
  length: 2,
} as const;

const MONTH_RULE = {
  min: 1,
  max: 12,
  length: 2,
  currentMonth: new Date().getMonth() + 1,
} as const;

const YEAR_RULE = {
  length: 2,
  currentYear: new Date().getFullYear(),
} as const;

const ERROR_MESSAGE = {
  TOTAL_LENGTH: 'MM/YY는 4자리입니다.',
  MONTH_LENGTH: 'MM은 2자리여야 합니다.',
  YEAR_LENGTH: 'YY는 2자리여야 합니다.',
  MONTH_RANGE: 'MM은 1~12 사이의 숫자여야 합니다.',
  YEAR_RANGE: `YY는 현재 연도(${Number(
    YEAR_RULE.currentYear.toString().slice(YEAR_RULE.length),
  )})보다 크거나 같아야 합니다.`,
  SAME_YEAR_MONTH_RANGE: `MM은 현재 월(${MONTH_RULE.currentMonth})보다 크거나 같고 최대 월(${MONTH_RULE.max})보다 작거나 같아야 합니다.`,
} as const;

const checkMonthLength = (month: string) => {
  return month.length === MONTH_RULE.length;
};

const checkMonthRange = (month: number) => {
  return month >= MONTH_RULE.min && month <= MONTH_RULE.max;
};

const checkYearLength = (year: string) => {
  return year.length === YEAR_RULE.length;
};

const YEAR_RANGE_TYPE_RULE = {
  same: 'same',
  less: 'less',
  greater: 'greater',
} as const;

const getYearRangeType = (year: number) => {
  const currentYear = Number(
    YEAR_RULE.currentYear.toString().slice(YEAR_RULE.length),
  );

  if (year === currentYear) {
    return YEAR_RANGE_TYPE_RULE.same;
  }

  if (year < currentYear) {
    return YEAR_RANGE_TYPE_RULE.less;
  }

  return YEAR_RANGE_TYPE_RULE.greater;
};

const checkMonthRangeInSameYear = (month: number) => {
  return month >= MONTH_RULE.currentMonth && month <= MONTH_RULE.max;
};

const validateCardValidityPeriod = ({
  month,
  year,
}: {
  month: string;
  year: string;
}) => {
  const newErrorMessage = {
    month: '',
    year: '',
  };

  const monthNumber = Number(month);
  const yearNumber = Number(year);

  const isValidMonthLength = checkMonthLength(month);
  const isValidYearLength = checkYearLength(year);

  if (!isValidMonthLength) {
    newErrorMessage.month = ERROR_MESSAGE.MONTH_LENGTH;
  } else {
    if (!checkMonthRange(monthNumber)) {
      newErrorMessage.month = ERROR_MESSAGE.MONTH_RANGE;
    }
  }

  if (!isValidYearLength) {
    newErrorMessage.year = ERROR_MESSAGE.YEAR_LENGTH;
  } else {
    const yearRangeType = getYearRangeType(yearNumber);
    if (yearRangeType === YEAR_RANGE_TYPE_RULE.greater) {
      newErrorMessage.year = '';
    } else if (yearRangeType === YEAR_RANGE_TYPE_RULE.less) {
      newErrorMessage.year = ERROR_MESSAGE.YEAR_RANGE;
    } else if (
      yearRangeType === YEAR_RANGE_TYPE_RULE.same &&
      !checkMonthRangeInSameYear(monthNumber)
    ) {
      newErrorMessage.month = ERROR_MESSAGE.SAME_YEAR_MONTH_RANGE;
    }
  }

  return newErrorMessage;
};

function useCardValidityPeriod() {
  const [cardValidityPeriod, setCardValidityPeriod] = useState({
    month: '',
    year: '',
  });

  const [errorMessage, setErrorMessage] = useState({
    month: '',
    year: '',
  });

  const onChangeCardValidityPeriod = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'month' | 'year',
  ) => {
    const { value } = e.target;

    if (value.length > PARSE_RULE.length) {
      return;
    }

    const nextMonth = type === 'month' ? value : cardValidityPeriod.month;
    const nextYear = type === 'year' ? value : cardValidityPeriod.year;

    setCardValidityPeriod({
      month: nextMonth,
      year: nextYear,
    });

    const newErrorMessage = validateCardValidityPeriod({
      month: nextMonth,
      year: nextYear,
    });

    setErrorMessage(newErrorMessage);
  };

  return {
    cardValidityPeriod,
    onChangeCardValidityPeriod,
    errorMessage,
  };
}

export default useCardValidityPeriod;
