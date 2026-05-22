import { cardFetcher } from '../fetcher/cardFetcher';

interface CreatedCardInfo {
    number: string;
    expirationDate: string;
    cvc: string;
    issuerCode: string;
}

interface CreateSuccessResponse {
    id: string;
}

export const createCard = async (createdCardInfo: CreatedCardInfo) => {
    return await cardFetcher<CreateSuccessResponse>('/cards', {
        method: 'POST',
        body: JSON.stringify(createdCardInfo),
    });
};
