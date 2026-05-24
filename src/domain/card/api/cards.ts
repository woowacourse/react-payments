import { CardRegisterError } from "./cards.error";
import type {
  CardListResponseItem,
  CardRegisterErrorResponse,
  CardRegisterRequestBody,
} from "./cards.types";

const BASE_URL = "https://woowa.yiheon.com";

export const requestRegisterCard = async (
  postCardInformation: CardRegisterRequestBody,
) => {
  const response = await fetch(`${BASE_URL}/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postCardInformation),
  });

  if (!response.ok) {
    const errorResponse: CardRegisterErrorResponse = await response.json();
    throw new CardRegisterError(errorResponse.message, errorResponse.code);
  }

  return response.json();
};

export const fetchCardList = async (): Promise<CardListResponseItem[]> => {
  const response = await fetch(`${BASE_URL}/cards`);

  if (!response.ok) {
    throw new Error("카드 목록을 불러오지 못했습니다.");
  }

  return response.json();
};

export const requestDeleteCard = async (id: string) => {
  const response = await fetch(`${BASE_URL}/cards/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("카드 삭제에 실패했습니다.");
  }
};
