import type { CardInfo } from '../../types/CardListItemDTO';
import { cardFetcher } from '../fetcher/cardFetcher';

export const getMyCards = async () => {
    return await cardFetcher<CardInfo[]>('/cards');
};
