import { cardFetcher } from '../fetcher/cardFetcher';

export const deleteCard = async (id: string) => {
    return await cardFetcher(`/cards/${id}`, { method: 'DELETE' });
};
