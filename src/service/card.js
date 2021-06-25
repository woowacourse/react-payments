import { fetchOptions } from './API';

export const getCards = async () => {
  try {
    const response = await fetch(
      'https://ddongule-payments.herokuapp.com/cards'
    ).then((response) => response.json());

    return response;
  } catch (error) {
    console.error(error);

    return [];
  }
};

export const postNewCard = async (body) => {
  try {
    await fetch(
      'https://ddongule-payments.herokuapp.com/cards',
      fetchOptions('POST', body)
    );
  } catch (error) {
    console.error(error);
  }
};
