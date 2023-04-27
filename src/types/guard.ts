import { CardCompany } from '.';
import { CARD_COMPANY } from '../constants';

export function isCardCompany(input: string): input is CardCompany {
  const companyNames = Object.values(CARD_COMPANY).map((cardCompany) => cardCompany.name);

  if (companyNames.includes(input)) return true;

  return false;
}
