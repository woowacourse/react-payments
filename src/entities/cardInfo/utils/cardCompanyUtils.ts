import {
  CARD_COMPANIES,
  CARD_COMPANIES_COLOR,
  CARD_COMPANIES_DEFAULT_COLOR,
} from '../constants/cardCompanyConstants';

type CardCompanyKey = keyof typeof CARD_COMPANIES;

export const getCardCompanyKey = (companyName: string): CardCompanyKey | undefined => {
  const companyKey = Object.keys(CARD_COMPANIES).find(
    (key) => CARD_COMPANIES[key as CardCompanyKey] === companyName,
  ) as CardCompanyKey | undefined;

  return companyKey;
};

export const getCardCompanyColor = (companyName: string): string => {
  if (!companyName) return CARD_COMPANIES_DEFAULT_COLOR;

  const companyKey = getCardCompanyKey(companyName);

  return companyKey
    ? CARD_COMPANIES_COLOR[CARD_COMPANIES[companyKey]]
    : CARD_COMPANIES_DEFAULT_COLOR;
};
