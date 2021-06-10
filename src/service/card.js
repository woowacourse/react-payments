import { fetchOptions } from './API';

export const getCards = async () => {
  try {
    const response = await fetch(
      'https://ddongule-payments-api.herokuapp.com/cards'
    ).then((response) => response.json());

    return response;
  } catch (error) {
    console.error(error);
  }
};

export const postNewCard = async (history, body) => {
  try {
    await fetch(
      'https://ddongule-payments-api.herokuapp.com/cards',
      fetchOptions('POST', body)
    );

    history.push('/lists');
  } catch (error) {
    console.error(error);
  }
};
