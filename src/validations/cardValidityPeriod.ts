import {
  MONTH_RULE,
  YEAR_RULE,
  ERROR_MESSAGE,
  YEAR_RANGE_TYPE_RULE,
} from '../constants/cardValidityPeriod';

const checkMonthLength = (month: string) => {
  return month.length === MONTH_RULE.length;
};

const checkMonthRange = (month: number) => {
  return month >= MONTH_RULE.min && month <= MONTH_RULE.max;
};

const checkYearLength = (year: string) => {
  return year.length === YEAR_RULE.length;
};

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

export { validateCardValidityPeriod };
