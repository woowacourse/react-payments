import { VALIDATION } from '../constants/validation';
import { isRange } from './isRange';

const formatValue = {
  monthFormat(month: string) {
    const monthNumber = Number(month);
    if (month && !isRange(monthNumber, VALIDATION.singleDigit.min, VALIDATION.singleDigit.max)) {
      return '0'.repeat(2 - month.length) + month;
    }
    return month;
  },
  periodFormat(month: string, year: string) {
    if (month) return [this.monthFormat(month), year].join('/');
  },
};

export default formatValue;
