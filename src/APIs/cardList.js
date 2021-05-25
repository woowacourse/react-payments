import axios from "axios";

import { MESSAGE } from "../constants";

const getCardList = async () => {
  try {
    const res = await axios("/cards");

    if (res.status !== 200) {
      throw new Error(`${res.status}: API call error`);
    }

    return res.data;
  } catch (error) {
    console.error(error);

    return [];
  }
};

const postCardList = async (card) => {
  try {
    const res = await axios.post("/cards", card);

    if (res.status !== 200) {
      throw new Error(`${res.status}: API call error`);
    }

    return {
      isSucceeded: true,
      message: "",
    };
  } catch(error) {
    console.error(error);

    return {
      isSucceeded: false,
      message: MESSAGE.ERROR.POST_CARD_LIST,
    };
  }
};

const putCardDescription = async (id, description) => {
  try {
    const res = await axios.put("/cards/description", { id, description });

    if (res.status !== 200) {
      throw new Error(`${res.status}: API call error`);
    }

    return {
      isSucceeded: true,
      message: "",
    };
  } catch (error) {
    console.error(error);

    return {
      isSucceeded: false,
      message: MESSAGE.ERROR.PUT_CARD_DESCRIPTION,
    };
  }
};

const deleteCardList = async (cardId) => {
  try {
    const res = await axios.delete(`/cards?id=${cardId}`);

    if (res.status !== 200) {
      throw new Error(`${res.status}: API call error`);
    }

    return {
      isSucceeded: true,
      message: "",
    }
  } catch (error) {
    console.error(error);

    return {
      isSucceeded: false,
      message: MESSAGE.ERROR.DELETE_CARD_LIST,
    }
  }
};

export { getCardList, postCardList, putCardDescription, deleteCardList };
