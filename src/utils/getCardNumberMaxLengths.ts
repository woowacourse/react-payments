import type { InternationalCardBrand } from '../types/InternationalCardBrand';
import { getCardBrand } from './getCardBrand';

const BRAND_MAX_LENGTHS: Partial<Record<InternationalCardBrand, number[]>> = {
    DINERS: [4, 6, 4],
    AMEX: [4, 6, 5],
};

export const getCardNumberMaxLengths = (firstGroup: string): number[] => {
    const brand = getCardBrand([firstGroup]);
    return (brand && BRAND_MAX_LENGTHS[brand]) ?? [4, 4, 4, 4];
};
