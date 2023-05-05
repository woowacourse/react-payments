import type { CreditCardVendor } from './CreditCardVendor';

export const CREDIT_CARD_VENDOR_BRAND_COLORS = {
  BC카드: '#f04651',
  신한카드: '#0046ff',
  카카오뱅크: '#ffe600',
  현대카드: '#000000',
  우리카드: '#007bc8',
  롯데카드: '#ed1c24',
  하나카드: '#009490',
  국민카드: '#585047',
} as const satisfies Record<CreditCardVendor, string>;
