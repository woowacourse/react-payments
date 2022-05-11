import { API_URL } from "../constants";

export const getCardList = async () => {
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

export const registerCard = async (data) => {
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
    throw new Error(err.message);
  }
};

export const editCard = async (id, data) => {
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

export const deleteCard = async (id) => {
  try {
    await fetch(`${API_URL}/api/cards/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
  } catch (err) {
    throw new Error("서버에서 문제가 발생하였습니다. 다시 시도해주세요");
  }
};
