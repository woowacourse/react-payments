import { COMPANY_NAME } from 'components/common/Card/types';
import { COMPANY_LIST } from '../constants';

export const isCompanyName = (company: string): company is COMPANY_NAME => {
  return Object.values(COMPANY_LIST).includes(company as COMPANY_NAME);
};
