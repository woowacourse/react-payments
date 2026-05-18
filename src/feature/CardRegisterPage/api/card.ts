import { BASE_URL } from "../../../shared/constants";
import type { IssuerCodeType } from "../../../shared/types/Issuer";

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

export const requestRegisterCard = async (
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
