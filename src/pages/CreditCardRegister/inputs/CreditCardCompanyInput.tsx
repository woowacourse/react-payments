import creditCardCompanies from 'assets/data/creditCardCompanies';
import { convertImage } from 'tools/image';
import * as T from 'types';
import {
  CreditCardCompanyImage, CreditCardCompanyInputLayout,
  CreditCardCompanyItem, CreditCardCompanyTitle
} from '../style';

/* eslint-disable @typescript-eslint/no-unused-vars */
interface CreditCardCompanyInputProps {
  closeModal: () => void;
  name: keyof T.CreditCard;
  creditCard: T.CreditCard;
  setCreditCard: React.Dispatch<React.SetStateAction<T.CreditCard>>;

}

function CreditCardCompanyInput({
  closeModal, name, creditCard, setCreditCard
}: CreditCardCompanyInputProps) {
  const handleChangeCreditCardCompany = (companyId: string) => {
    setCreditCard({ ...creditCard, [name]: companyId });
    closeModal();
  };

  return (
    <CreditCardCompanyInputLayout>
      {creditCardCompanies.map((creditCardCompany) => (
        <CreditCardCompanyItem
          key={creditCardCompany.id}
          onClick={() => handleChangeCreditCardCompany(creditCardCompany.id)}
        >
          <CreditCardCompanyImage
            src={convertImage(creditCardCompany.id)}
            alt={creditCardCompany.name}
          />
          <CreditCardCompanyTitle>{creditCardCompany.name}</CreditCardCompanyTitle>
        </CreditCardCompanyItem>
      ))}
    </CreditCardCompanyInputLayout>
  );
}
export default CreditCardCompanyInput;
