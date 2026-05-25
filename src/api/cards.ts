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

export class ApiError extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

const fetcher = async (url: RequestInfo, options?: RequestInit): Promise<Response> => {
  let res: Response;
  try {
    res = await fetch(url, options);
  } catch {
    throw new ApiError('NETWORK_ERROR', '네트워크 연결을 확인해주세요.');
  }

  if (res.status >= 500) {
    throw new ApiError(`${res.status}`, res.statusText);
  }

  if (res.status >= 400 && res.status < 500) {
    const { code, message } = await res.json();
    throw new ApiError(code, message);
  }

  return res;
};

export const getCardListDTO = async (): Promise<CardDTO[]> => {
  const response = await fetcher(API_ENDPOINTS.cards);
  return response.json();
};

export const addCard = async (body: CardRequestBody): Promise<{ id: string }> => {
  const response = await fetcher(API_ENDPOINTS.cards, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return response.json();
};

export const deleteCard = async (id: string): Promise<void> => {
  await fetcher(API_ENDPOINTS.card(id), { method: 'DELETE' });
};
