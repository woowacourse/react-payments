export type FormType = "owner" | "expirationPeriod" | "cardNumber";

export const CARD_FORM_TYPE: Record<FormType, FormType> = {
  owner: "owner",
  expirationPeriod: "expirationPeriod",
  cardNumber: "cardNumber",
};
