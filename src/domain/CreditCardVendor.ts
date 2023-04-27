export const CreditCardVendors = {
  BC카드: {
    displayName: 'BC카드',
    color: '#f04651',
  },
  신한카드: {
    displayName: '신한카드',
    color: '#0046ff',
  },
  카카오뱅크: {
    displayName: '카카오뱅크',
    color: '#ffe600',
  },
  현대카드: {
    displayName: '현대카드',
    color: '#000000',
  },
  우리카드: {
    displayName: '우리카드',
    color: '#007bc8',
  },
  롯데카드: {
    displayName: '롯데카드',
    color: '#ed1c24',
  },
  하나카드: {
    displayName: '하나카드',
    color: '#009490',
  },
  국민카드: {
    displayName: '국민카드',
    color: '#585047',
  },
} as const satisfies Record<
  string,
  {
    displayName: string;
    color: string;
  }
>;

export type CreditCardVendorName = keyof typeof CreditCardVendors;

export const CreditCardVendorNames: CreditCardVendorName[] = Object.keys(
  CreditCardVendors,
) as CreditCardVendorName[];

export type CreditCardVendor = (typeof CreditCardVendors)[CreditCardVendorName];
