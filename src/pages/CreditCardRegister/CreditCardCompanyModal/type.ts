import * as Type from '@Types/index';

export type CreditCardCompanyModalProps = {
  updateCompany: (company: Type.CreditCardCompanies) => void;
  closeModal: () => void;
};
