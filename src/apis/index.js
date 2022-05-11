import axios from 'axios';
import { PATH } from 'constants';

const getCards = async () => {
  const response = await axios.get(`${PATH.JSON_SERVER_BASE_URL}/cards`);

  return response.data;
};

const getLatestCard = async () => {
  const cards = await getCards();

  return [cards.length, cards[cards.length - 1]];
};

const postCard = async (card) => {
  const { companyName, cardNumber, expireMonth, expireYear, userName, securityCode, cardPassword } =
    card;

  await axios.post(`${PATH.JSON_SERVER_BASE_URL}/cards`, {
    companyName,
    cardNumber,
    expireMonth,
    expireYear,
    userName,
    securityCode,
    cardPassword,
  });
};

const putCardNickname = async (cardNickname) => {
  const [cardId, cardInfo] = await getLatestCard();

  await axios.put(`${PATH.JSON_SERVER_BASE_URL}/cards/${cardId}`, {
    ...cardInfo,
    cardNickname,
  });
};

export { getCards, postCard, putCardNickname };
