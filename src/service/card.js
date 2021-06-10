import { fetchOptions } from './API';

export const getCards = async () => {
  try {
    const response = await fetch(
      'http://localhost:4000/cards'
    ).then((response) => response.json());

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postNewCard = async (history, body) => {
  try {
    await fetch('http://localhost:4000/cards', fetchOptions('POST', body));

    history.push('/lists');
  } catch (error) {
    console.error(error);
  }
};
