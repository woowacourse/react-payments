export interface CardListItem {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

export type CardListResponse = CardListItem[];

export const getCards = async (): Promise<CardListResponse> => {
  const response = await fetch("/cards");

  if (!response.ok) {
    throw new Error("카드 목록 조회 실패");
  }

  return response.json();
};
