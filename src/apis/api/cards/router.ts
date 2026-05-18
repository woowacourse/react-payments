import fetcher from "@apis/fetcher";

const API_URL = "/api/cards";

interface Card {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

export const getCards = async () => {
  return fetcher.get<Card[]>(API_URL);
};

interface RegisterCardRequest {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

interface RegisterCardResponse {
  id: string;
}

export const registerCard = async (cardInfo: RegisterCardRequest) => {
  return fetcher.post<RegisterCardResponse>(API_URL, cardInfo);
};

export const CARD_ERROR_CODE = {
  INVALID_CARD_NUMBER: "INVALID_CARD_NUMBER",
  INVALID_CVC: "INVALID_CVC",
  INVALID_EXPIRATION_DATE: "INVALID_EXPIRATION_DATE",
} as const;

export type CardErrorCode = (typeof CARD_ERROR_CODE)[keyof typeof CARD_ERROR_CODE];

export const isCardErrorCode = (code: unknown): code is CardErrorCode =>
  typeof code === "string" && code in CARD_ERROR_CODE;
