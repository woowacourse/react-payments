import { BASE_URL } from "../../../constants";
import type { IssuerCodeType } from "../../CardListPage/types/CardCompay";

// todo 위치 이동 필요
export type PostCardRequestBody = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: IssuerCodeType;
};

export const fetchCardRegister = async (
  postCardInformation: PostCardRequestBody,
) => {
  const response = await fetch(`${BASE_URL}/cards`, {
    method: "POST",
    body: JSON.stringify(postCardInformation),
  });

  if (!response.ok) {
    throw new Error("카드 등록에 실패했습니다.");
  }

  return response.json();
};
