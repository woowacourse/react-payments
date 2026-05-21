export type CardDTO = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
};

export const API_ENDPOINTS = {
  cards: '/cards',
  card: (id: string) => `/cards/${id}`,
} as const;

type CardRequestBody = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
};

export const getCardListDTO = (): Promise<CardDTO[]> =>
  fetch(API_ENDPOINTS.cards).then((res) => {
    if (!res.ok) throw new Error('카드 목록을 불러오지 못했습니다.');
    return res.json() as Promise<CardDTO[]>;
  });

export const addCard = async (body: CardRequestBody): Promise<{ id: string }> => {
  const res = await fetch(API_ENDPOINTS.cards, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw await res.json();
  return res.json();
};

export const deleteCard = (id: string): Promise<void> =>
  fetch(API_ENDPOINTS.card(id), { method: 'DELETE' }).then((res) => {
    if (!res.ok) throw new Error();
  });
