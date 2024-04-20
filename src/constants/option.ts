const OPTION = {
  cardNumberInputCount: 4,
  cardNumberMaxLength: 4,
  expirationDateInputCount: 2,
  expirationDateMaxLength: 2,
  nameMaxLength: 50,
  minMonth: '01',
  maxMonth: '12',
  cardBrand: {
    visa: 'Visa',
    masterCard: 'MasterCard',
  },
} as const;

export default OPTION;
