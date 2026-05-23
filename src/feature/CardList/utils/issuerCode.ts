import {
  CARD_COMPANIES,
  type CardCompanyId,
} from '../../../domain/card/constant/cardCompanies';

export const getCardIssuerCode = (cardCompanyId: CardCompanyId | null) => {
  return (
    CARD_COMPANIES.find((company) => company.id === cardCompanyId)
      ?.issuerCode ?? null
  );
};

export const getCardCompanyNameByIssuerCode = (issuerCode: string | null) => {
  return (
    CARD_COMPANIES.find((company) => company.issuerCode === issuerCode)?.name ??
    ''
  );
};

export const getCardCompanyColorByIssuerCode = (issuerCode: string | null) => {
  return (
    CARD_COMPANIES.find((company) => company.issuerCode === issuerCode)
      ?.color ?? '#333333'
  );
};
