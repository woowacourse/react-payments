import { ApiError, type ApiErrorResponse } from "./error";

export interface CardRegisterRequest {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

export interface CardRegisterResponse {
  id: string;
}

export interface CardListItem {
  id: string;
  issuerCode: string;
  maskedNumber: string;
  expirationDate: string;
}

export type CardListResponse = CardListItem[];

export const registerCard = async (
  card: CardRegisterRequest,
): Promise<CardRegisterResponse> => {
  const response = await fetch("/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  });

  if (!response.ok) {
    if (response.status === 400) {
      const error = (await response.json()) as ApiErrorResponse;
      throw new ApiError(error);
    }

    throw new Error("카드 등록에 실패했습니다.");
  }

  return response.json();
};

export const getCards = async (): Promise<CardListResponse> => {
  const response = await fetch("/cards");

  if (!response.ok) {
    throw new Error("카드 목록 조회에 실패했습니다.");
  }

  return response.json();
};

export const deleteCard = async (cardId: string): Promise<void> => {
  const response = await fetch(`/cards/${cardId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("카드 삭제에 실패했습니다.");
  }
};
