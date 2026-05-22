export type CardRegisterErrorCode =
  | "INVALID_CARD_NUMBER"
  | "INVALID_CVC"
  | "INVALID_EXPIRATION_DATE";

export class CardRegisterError extends Error {
  code: CardRegisterErrorCode;
  constructor(message: string, code: CardRegisterErrorCode) {
    super(message);
    this.name = "CardRegisterError";
    this.code = code;
  }
}
