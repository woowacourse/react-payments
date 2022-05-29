import { API_URL } from "constants/index";
import { AllCardData, CardDataType } from "types";

export const getCardList = async (): Promise<AllCardData> => {
  try {
    const response = await fetch(`${API_URL}/api/cards`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });

    return await response.json();
  } catch (err) {
    throw new Error("서버에서 문제가 발생하였습니다. 다시 시도해주세요");
  }
};

export const registerCard = async (
  data: Omit<CardDataType, "id">
): Promise<void> => {
  try {
    const res = await fetch(`${API_URL}/api/car`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ data }),
    });

    if (!res.ok) {
      throw new Error("서버에서 문제가 발생하였습니다. 다시 시도해주세요");
    }
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
};

export const editCard = async <KP extends keyof CardDataType>(
  id: string,
  data: Pick<CardDataType, KP>
): Promise<void> => {
  try {
    await fetch(`${API_URL}/api/cards/${id}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ data }),
    });
  } catch (err) {
    throw new Error("서버에서 문제가 발생하였습니다. 다시 시도해주세요");
  }
};

export const deleteCard = async (id: string): Promise<void> => {
  try {
    await fetch(`${API_URL}/api/cards/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
  } catch (err) {
    throw new Error("서버에서 문제가 발생하였습니다. 다시 시도해주세요");
  }
};
