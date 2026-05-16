import type { InternationalCardBrand } from '../types/InternationalCardBrand';

const isDiners = (firstGroup: string) => firstGroup.startsWith('36');

const isAMEX = (firstGroup: string) => firstGroup.startsWith('34') || firstGroup.startsWith('37');

const isUnionPay = (prefix: string) => {
    if (prefix.length < 4) return false;
    const prefix4 = parseInt(prefix.slice(0, 4), 10);
    if (prefix4 >= 6221 && prefix4 <= 6229) {
        if (prefix.length >= 6) {
            const prefix6 = parseInt(prefix.slice(0, 6), 10);
            return prefix6 >= 622126 && prefix6 <= 622925;
        }
        return true;
    }
    if (prefix4 >= 6240 && prefix4 <= 6269) return true;
    if (prefix4 >= 6282 && prefix4 <= 6288) return true;
    return false;
};

const isMasterCard = (firstGroup: string) => {
    if (firstGroup.length < 2) return false;
    const secondDigit = Number(firstGroup[1]);
    return firstGroup.startsWith('5') && secondDigit >= 1 && secondDigit <= 5;
};

const isVisa = (firstGroup: string) => firstGroup.startsWith('4');

export const getCardBrand = (cardNumbers: string[]): InternationalCardBrand | null => {
    const firstGroup = cardNumbers[0] ?? '';
    const prefix = firstGroup + (cardNumbers[1] ?? '');

    if (isDiners(firstGroup)) return 'DINERS';
    if (isAMEX(firstGroup)) return 'AMEX';
    if (isUnionPay(prefix)) return 'UNION_PAY';
    if (isMasterCard(firstGroup)) return 'MASTERCARD';
    if (isVisa(firstGroup)) return 'VISA';
    return null;
};
