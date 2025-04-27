import {
  CARD_COMPANIES,
  CARD_COMPANIES_COLOR,
  CARD_COMPANIES_DEFAULT_COLOR,
} from '../constants/cardCompanyConstants';

export const getCardCompanyKey = (companyName: string): keyof typeof CARD_COMPANIES | undefined => {
  const companyKey = Object.keys(CARD_COMPANIES).find(
    (key) => CARD_COMPANIES[key as keyof typeof CARD_COMPANIES] === companyName,
  ) as keyof typeof CARD_COMPANIES | undefined;

  return companyKey;
};

export const getCardCompanyColor = (companyName: string): string => {
  if (!companyName) return CARD_COMPANIES_DEFAULT_COLOR;

  const companyKey = getCardCompanyKey(companyName);

  return companyKey
    ? CARD_COMPANIES_COLOR[CARD_COMPANIES[companyKey]]
    : CARD_COMPANIES_DEFAULT_COLOR;
};
