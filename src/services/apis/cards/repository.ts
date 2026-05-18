import { getCards, postCards, deleteCards } from './fetcher';
import { mapCardsResponseDTOToModel, mapCardModelToRequestDTO } from './mapper';

export default {
  getCards: async () => {
    const data = await getCards();
    return mapCardsResponseDTOToModel(data);
  },
  postCards: async (data: {
    cardNumbers: { [key in '0' | '1' | '2' | '3']: string };
    card: string;
    cvc: string;
    expirationDate: { month: string; year: string };
  }) => {
    const dataDTO = mapCardModelToRequestDTO(data);
    return await postCards(dataDTO);
  },
  deleteCards,
};
