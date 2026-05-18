import { BASE_URL } from "../../../shared/constants";
import type { RequestErrorInformation } from "../../../shared/types/api";
import type { PostCardRequestBody } from "../types/card";

export const requestRegisterCard = async (
  postCardInformation: PostCardRequestBody,
) => {
  const response = await fetch(`${BASE_URL}/cards`, {
    method: "POST",
    body: JSON.stringify(postCardInformation),
  });

  if (!response.ok) {
    const error: RequestErrorInformation = await response.json();
    throw error;
  }

  return response.json();
};
