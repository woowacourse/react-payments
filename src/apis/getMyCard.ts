import type { CardInfo } from '../types/CardListItemDTO';
import { cardFetcher } from '../utils/cardFetcher';

export const getMyCards = async () => {
    return await cardFetcher<CardInfo[]>('/cards');
};
