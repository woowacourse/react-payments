import { GET, POST, PATCH, DELETE } from 'constants/index';
import { CardInfo } from 'types';

const API_BASE_URL = 'https://json-web-server-lokba.herokuapp.com';

const OPTIONS = (method: string, body?: object) => {
  switch (method) {
    case GET:
    case DELETE:
      return {
        method,
        headers: { 'Content-type': 'application/json' },
      };
    case POST:
    case PATCH:
      return {
        method,
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(body),
      };
    default:
      alert('존재하지 않은 method입니다.');
  }
};

const CARD_API = {
  // create
  addCard(cardInfo: CardInfo) {
    try {
      fetch(`${API_BASE_URL}/cardList`, OPTIONS(POST, cardInfo));
    } catch (e) {
      throw Error('카드 등록 과정에서 오류가 발생했습니다.');
    }
  },
  // read
  async getCard(cardId: string) {
    try {
      const response = await fetch(`${API_BASE_URL}/cardList/${cardId}`, OPTIONS(GET));

      if (!response.ok) {
        throw Error('카드 불러오기 과정에서 오류가 발생했습니다.');
      }

      return response.json();
    } catch (e) {
      throw e;
    }
  },
  async getCardList() {
    try {
      const response = await fetch(`${API_BASE_URL}/cardList`, OPTIONS(GET));

      return response.json();
    } catch (e) {
      throw Error('카드 목록 불러오기 과정에서 오류가 발생했습니다.');
    }
  },
  // update
  updateCard(id: string, cardInfo: CardInfo) {
    try {
      fetch(`${API_BASE_URL}/cardList/${id}`, OPTIONS(PATCH, cardInfo));
    } catch (e) {
      throw Error('카드 수정 과정에서 오류가 발생했습니다.');
    }
  },
  // delete
  async deleteCard(id: string) {
    try {
      await fetch(`${API_BASE_URL}/cardList/${id}`, OPTIONS(DELETE));
    } catch (e) {
      throw Error('카드 삭제 과정에서 오류가 발생했습니다.');
    }
  },
};

export default CARD_API;
