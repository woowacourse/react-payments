import { BASE_URL } from "../../../constants";
import type { IssuerCodeType } from "../../CardListPage/types/CardCompay";

// todo 위치 이동 필요
export type PostCardRequestBody = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: IssuerCodeType;
};

export type ErrorInformation = {
  code: string;
  message: string;
};

export const registerCard = async (
  postCardInformation: PostCardRequestBody,
) => {
  const response = await fetch(`${BASE_URL}/cards`, {
    method: "POST",
    body: JSON.stringify(postCardInformation),
  });

  if (!response.ok) {
    const error: ErrorInformation = await response.json();
    throw error;
  }

  return response.json();
};
