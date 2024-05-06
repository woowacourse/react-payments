const OPTION = {
  cardNumberInputCount: 4,
  cardNumberMaxLength: 4,
  expirationDateInputCount: 2,
  expirationDateMaxLength: 2,
  nameMaxLength: 50,
  cvcMaxLength: 3,
  passwordMaxLength: 2,
  minMonth: '01',
  maxMonth: '12',
} as const;

export default OPTION;
