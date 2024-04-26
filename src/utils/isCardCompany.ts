import { COMPANY_LIST, CardCompany } from '../types/cardCompany';

export function isCardCompany(value: string): value is CardCompany {
  return Object.keys(COMPANY_LIST).includes(value);
}
