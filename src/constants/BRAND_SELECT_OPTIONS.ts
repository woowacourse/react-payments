import type { CardBrandValue } from '../types/CardBrandValue';

interface BrandSelectOption {
    value: CardBrandValue;
    label: string;
}

export const BRAND_SELECT_OPTIONS: BrandSelectOption[] = [
    { value: 'BC', label: 'BC카드' },
    { value: 'SHINHAN', label: '신한카드' },
    { value: 'KAKAO', label: '카카오뱅크' },
    { value: 'HYUNDAI', label: '현대카드' },
    { value: 'WOORI', label: '우리카드' },
    { value: 'LOTTE', label: '롯데카드' },
    { value: 'HANA', label: '하나카드' },
    { value: 'KB', label: '국민카드' },
];

export const ISSUER_CODE_MAP: Record<string, CardBrandValue> = {
    '31': 'BC',
    '41': 'SHINHAN',
    '15': 'KAKAO',
    '61': 'HYUNDAI',
    W1: 'WOORI',
    '71': 'LOTTE',
    '21': 'HANA',
    '11': 'KB',
};

export const BRAND_VALUE_TO_ISSUER_CODE: Record<string, string> = Object.fromEntries(
    Object.entries(ISSUER_CODE_MAP).map(([code, brand]) => [brand, code])
);
