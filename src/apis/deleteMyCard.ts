import { cardFetcher } from '../utils/cardFetcher';

export const deleteMyCard = async (id: string) => {
    return await cardFetcher(`/cards/:${id}`);
};
