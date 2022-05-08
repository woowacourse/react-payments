import { CardInfoWithCardName } from "types/cardInfo";

const BASE_URL = "http://localhost:4000";

async function getCards(): Promise<CardInfoWithCardName[]> {
  const response = await fetch(`${BASE_URL}/cards`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("카드 정보를 가져오는 데 실패하였습니다.");

  const data = response.json();

  return data;
}

async function addCard(cardInfo: CardInfoWithCardName) {
  await fetch(`${BASE_URL}/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cardInfo),
  });
}

async function editCard(id: number, partialCardInfo: Partial<CardInfoWithCardName>) {
  try {
    await fetch(`${BASE_URL}/cards/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(partialCardInfo),
    });
  } catch (error) {
    console.log("error", error);
  }
}

const API = {
  getCards,
  addCard,
  editCard,
};

export default API;
