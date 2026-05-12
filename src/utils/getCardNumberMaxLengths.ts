import { isDinersCardNumber } from './isDinersCardNumber';
import { isAMEXCardNumber } from './isAMEXCardNumber';

export const getCardNumberMaxLengths = (firstGroup: string): number[] => {
    if (isDinersCardNumber(firstGroup)) return [4, 6, 4];
    if (isAMEXCardNumber(firstGroup)) return [4, 6, 5];
    return [4, 4, 4, 4];
};
