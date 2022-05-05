export const registerCardAPI = (cardInfo) => {
  try {
    fetch('http://localhost:8000/cardList', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(cardInfo),
    });
  } catch (e) {
    throw Error('카드 등록 과정에서 오류가 발생했습니다.');
  }
};

export const getCardListAPI = async () => {
  try {
    const response = await fetch('http://localhost:8000/cardList', {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });

    return response.json();
  } catch (e) {
    throw Error('카드 목록 불러오기 과정에서 오류가 발생했습니다.');
  }
};

export const getCardAPI = async (cardId) => {
  try {
    const response = await fetch(`http://localhost:8000/cardList/${cardId}`, {
      method: 'GET',
      headers: { 'Content-type': 'application/json' },
    });

    return response.json();
  } catch (e) {
    throw Error('카드 불러오기 과정에서 오류가 발생했습니다.');
  }
};

export const updateCardAPI = (id, cardInfo) => {
  try {
    fetch(`http://localhost:8000/cardList/${id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(cardInfo),
    });
  } catch (e) {
    throw Error('카드 수정 과정에서 오류가 발생했습니다.');
  }
};

export const deleteCardAPI = (id) => {
  try {
    fetch(`http://localhost:8000/cardList/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    });
  } catch (e) {
    throw Error('카드 삭제 과정에서 오류가 발생했습니다.');
  }
};
