import type {CreateCardRequest} from '@/domain/card/cardApi.types';
import {CARD_COMPANIES} from '@/domain/card/cardCompany';
import type {CardCompanyType} from '@/domain/card/cardCompany';

type CreateCardRequestParams = {
  cardNumbers: string[];
  expiryDate: string[];
  cvcNumber: string;
  selectedCompany: CardCompanyType;
};

export const createCardRequest = ({
  cardNumbers,
  expiryDate,
  cvcNumber,
  selectedCompany,
}: CreateCardRequestParams): CreateCardRequest => ({
  number: cardNumbers.join(''),
  expirationDate: `${expiryDate[0]}/${expiryDate[1]}`,
  cvc: cvcNumber,
  issuerCode: CARD_COMPANIES[selectedCompany].issuerCode,
});
