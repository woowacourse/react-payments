import { cardFetcher } from '../utils/cardFetcher';

export const deleteCard = async (id: string) => {
    return await cardFetcher(`/cards/:${id}`);
};
