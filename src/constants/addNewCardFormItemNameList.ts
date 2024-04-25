export const FORM_ITEM_NAME_LIST = {
  CARD_NUMBERS: 'cardNumbers',
  EXPIRATION_DATE: 'expirationDate',
  OWNER_NAME: 'ownerName',
  CARD_COMPANY: 'cardCompany',
  CVC_NUMBERS: 'CVCNumbers',
  PASSWORD: 'password',
} as const;

export type FormItem = (typeof FORM_ITEM_NAME_LIST)[keyof typeof FORM_ITEM_NAME_LIST];
