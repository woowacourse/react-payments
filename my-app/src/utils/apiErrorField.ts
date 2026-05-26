import type { ApiError, ApiErrorCode } from "../apis/cards";

type CardFormField = "numbers" | "cvc" | "expiry";

const CODE_TO_FIELD: Record<ApiErrorCode, CardFormField> = {
  INVALID_CARD_NUMBER: "numbers",
  INVALID_CVC: "cvc",
  INVALID_EXPIRATION_DATE: "expiry",
};

export const toFieldError = (error: ApiError): { field: CardFormField; message: string } => ({
  field: CODE_TO_FIELD[error.code],
  message: error.message,
});
