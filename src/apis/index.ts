import { CardInfo } from "types/cardInfo";

const BASE_URL = "http://localhost:4000";

async function getCards(): Promise<CardInfo[]> {
  try {
    const response = await fetch(`${BASE_URL}/cards`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("카드 정보를 가져오는 데 실패하였습니다.");

    const data = response.json();

    return data;
  } catch (error) {
    console.log("error", error);
  }
}

async function addCard(cardInfo: CardInfo) {
  try {
    await fetch(`${BASE_URL}/cards`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cardInfo),
    });
  } catch (error) {
    console.log("error", error);
  }
}

const API = {
  getCards,
  addCard,
};

export default API;
