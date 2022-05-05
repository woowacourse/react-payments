const API_BASE_URL = 'http://localhost:8000';

const CARD_API = {
  // create
  async addCard(cardInfo) {
    try {
      await fetch(`${API_BASE_URL}/cardList`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(cardInfo),
      });
    } catch (e) {
      throw Error('카드 등록 과정에서 오류가 발생했습니다.');
    }
  },
  // read
  async getCard(cardId) {
    try {
      const response = await fetch(`${API_BASE_URL}/cardList/${cardId}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      });

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
      const response = await fetch(`${API_BASE_URL}/cardList`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      });

      return response.json();
    } catch (e) {
      throw Error('카드 목록 불러오기 과정에서 오류가 발생했습니다.');
    }
  },
  // update
  async updateCard(id, cardInfo) {
    try {
      await fetch(`${API_BASE_URL}/cardList/${id}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(cardInfo),
      });
    } catch (e) {
      throw Error('카드 수정 과정에서 오류가 발생했습니다.');
    }
  },
  // delete
  async deleteCard(id) {
    try {
      await fetch(`${API_BASE_URL}/cardList/${id}`, {
        method: 'DELETE',
        headers: { 'Content-type': 'application/json' },
      });
    } catch (e) {
      throw Error('카드 삭제 과정에서 오류가 발생했습니다.');
    }
  },
};

export default CARD_API;
