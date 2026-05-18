export interface SendingData {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
}

export interface Card {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
}

const API_BASE = import.meta.env.BASE_URL;

export const postCard = async (
  sendingData: SendingData,
): Promise<{ id: string }> => {
  const response = await fetch(`${API_BASE}cards`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sendingData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};

export const getCards = async (): Promise<Card[]> => {
  const response = await fetch(`${API_BASE}cards`);
  if (!response.ok) {
    throw new Error('카드 목록 불러오기 실패!');
  }
  return response.json();
};

export const deleteCard = async (id: string): Promise<void> => {
  const response = await fetch(`${API_BASE}cards/${id}`, {
    method: 'DELETE',
  });

  if (!response.ok) {
    throw new Error('카드 삭제에 실패했습니다.');
  }
};
