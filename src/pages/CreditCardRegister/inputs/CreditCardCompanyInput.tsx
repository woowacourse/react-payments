import creditCardCompanies from 'assets/data/creditCardCompanies';
import { convertImage } from 'tools/image';
import * as T from 'types';
import useCreditCard from 'hooks/useCreditCard';
import {
  CreditCardCompanyImage, CreditCardCompanyInputLayout,
  CreditCardCompanyItem, CreditCardCompanyTitle
} from '../style';

interface CreditCardCompanyInputProps extends T.CreditCardInputProps {
  closeModal: () => void;
}

function CreditCardCompanyInput({ closeModal, name }: CreditCardCompanyInputProps) {
  const { creditCard, setCreditCard } = useCreditCard();

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
