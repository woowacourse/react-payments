import { tryCatch } from "../utils/tryCatch";
import { API, fillPath } from "./endpoints";

export type ApiErrorCode = "INVALID_CARD_NUMBER" | "INVALID_CVC" | "INVALID_EXPIRATION_DATE";

export type ApiError = {
  code: ApiErrorCode;
  message: string;
};

export type CreateCardRequest = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
};

export type CreateCardResponse = {
  id: string;
};

export type CardListItem = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
};

const FALLBACK_ERROR: ApiError = {
  code: "INVALID_CARD_NUMBER",
  message: "알 수 없는 오류가 발생했습니다.",
};

const toApiError = async (res: Response): Promise<ApiError> => {
  const body = await res.json();
  if (typeof body?.code === "string" && typeof body?.message === "string") {
    return body as ApiError;
  }
  return FALLBACK_ERROR;
};

const parseApiError = (res: Response): Promise<ApiError> =>
  tryCatch(() => toApiError(res), () => FALLBACK_ERROR);

export const createCard = async (request: CreateCardRequest): Promise<CreateCardResponse> => {
  const res = await fetch(API.createCard.pattern, {
    method: API.createCard.method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  if (!res.ok) throw await parseApiError(res);
  return res.json();
};

export const getCards = async (): Promise<CardListItem[]> => {
  const res = await fetch(API.listCards.pattern, { method: API.listCards.method });
  if (!res.ok) throw await parseApiError(res);
  return res.json();
};

export const deleteCard = async (id: string): Promise<void> => {
  const res = await fetch(fillPath(API.deleteCard.pattern, { id }), {
    method: API.deleteCard.method,
  });
  if (!res.ok) throw await parseApiError(res);
};
