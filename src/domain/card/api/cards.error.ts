export type CardRegisterErrorCode =
  | "INVALID_CARD_NUMBER"
  | "INVALID_CVC"
  | "INVALID_EXPIRATION_DATE"
  | "INVALID_ISSUER_CODE";

export class CardRegisterError extends Error {
  code: CardRegisterErrorCode;
  constructor(message: string, code: CardRegisterErrorCode) {
    super(message);
    this.name = "CardRegisterError";
    this.code = code;
  }
}
