import { COMPANY_LIST } from '../types/cardCompany';

export default function isCardCompany(value: string) {
  const cardCompanyValues = Object.values(COMPANY_LIST);

  return cardCompanyValues.includes(value);
}
