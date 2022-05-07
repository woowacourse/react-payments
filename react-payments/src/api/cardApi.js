import { API_URL } from "../constants";

export const getCardList = async () => {
  try {
    const response = await fetch(`${API_URL}/api/cards`, {
      method: "GET",
      headers: { "Content-type": "application/json" },
    });

    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export const registerCard = async (data) => {
  try {
    await fetch(`${API_URL}/api/cards`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ data }),
    });
  } catch (err) {
    console.log(err);
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
    console.log(err);
  }
};

export const deleteCard = async (id) => {
  try {
    await fetch(`${API_URL}/api/cards/${id}`, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
  } catch (err) {
    console.log(err);
  }
};
