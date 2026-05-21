import { paymentsFetcher } from '../utils/paymentsFetcher.ts';
import type { SGetCardsResponse } from '../../mocks/handlers/cards/get.ts';
import type { CreateCardRequest, CreateCardResponse, GetCardsResponse } from './type.ts';
import { chunkString, getCardCompanyFromIssuerCode, getIssuerCodeFromCardCompany } from '../../utils.ts';
import type { SCreateCardRequest, SCreateCardResponse } from '../../mocks/handlers/cards/post.ts';

// 카드 목록 조회
export const getCards = async () => {
  const response = await paymentsFetcher<SGetCardsResponse>(`cards`);

  const clientResponse: GetCardsResponse = response.map((card) => ({
    id: card.id,
    cardNumbers: chunkString(card.number, 4),
    cardCompany: getCardCompanyFromIssuerCode(card.issuerCode),
    expirationPeriod: card.expirationDate.split('/'),
  }));

  return clientResponse;
};

// 카드 등록
export const createCard = async (request: CreateCardRequest) => {
  const serverRequest: SCreateCardRequest = {
    number: request.cardNumbers.join(''),
    issuerCode: getIssuerCodeFromCardCompany(request.cardCompany),
    expirationDate: request.expirationPeriod.join('/'),
    cvc: request.cvc,
  };

  const response = await paymentsFetcher<SCreateCardResponse>(`cards`, {
    method: 'post',
    body: JSON.stringify(serverRequest),
  });

  const clientResponse: CreateCardResponse = response;
  return clientResponse;
};

// 카드 삭제
export const deleteCard = async (cardId: string) => {
  const response = await paymentsFetcher<null>(`cards/${cardId}`, { method: 'delete' });
  return response;
};
