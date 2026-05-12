import { isNumeric } from './isNumeric';
import { getCardNumberMaxLengths } from './getCardNumberMaxLengths';

const ERROR_MESSAGE = '유효하지 않은 카드번호입니다.';

export const getCardNumberErrorMessage = (values: string[]) => {
    const maxLengths = getCardNumberMaxLengths(values[0]);
    const activeValues = values.slice(0, maxLengths.length);
    if (activeValues.some((value, index) => value.length !== maxLengths[index])) return ERROR_MESSAGE;
    if (activeValues.some((value) => isNumeric(value) !== null)) return ERROR_MESSAGE;
    return null;
};
