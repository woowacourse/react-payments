import { COMPANY_NAME } from 'components/common/Card/types';
import { COMPANY_LIST } from '../constants';

export const isCompanyName = (company: string): company is COMPANY_NAME => {
  if (COMPANY_LIST.includes(company as COMPANY_NAME)) return true;
  return false;
};
