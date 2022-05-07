const ENDPOINT = 'https://moonheekim-payments-server.herokuapp.com/cards';

const METHODS = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
};

const request = async (uri, options) => {
  const response = await fetch(uri, options);
  const data = await response.json();
  return data;
};

export const API_ADD_CARD = async (cardInformation) => {
  try {
    console.log(cardInformation);
    await request(ENDPOINT, {
      method: METHODS.POST,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardInformation),
    });
  } catch (error) {
    console.error(error);
  }
};

export const API_GET_CARD = async () => {
  try {
    const response = await request(ENDPOINT, {
      method: METHODS.GET,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
