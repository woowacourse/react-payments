import { cardFetcher } from '../utils/cardFetcher';

export interface CardInfo {
    id: string;
    issueCode: string;
    number: string;
    expirationDate: string;
}

export const getMyCards = async () => {
    return await cardFetcher<CardInfo>('/cards');
};
