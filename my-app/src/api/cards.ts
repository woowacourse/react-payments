const BASE_URL = "/cards";

export type CardItem = {
  id: string;
  issuerCode: string;
  number: string;
  expirationDate: string;
};

export type CreateCardBody = {
  number: string;
  expirationDate: string;
  cvc: string;
  issuerCode: string;
};

export type ApiError = {
  code: string;
  message: string;
};

export async function getCards(): Promise<CardItem[]> {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("카드 목록 조회 실패");
  return res.json();
}

export async function createCard(body: CreateCardBody): Promise<{ id: string }> {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const error: ApiError = await res.json();
    throw error;
  }

  return res.json();
}

export async function deleteCard(id: string): Promise<void> {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}
