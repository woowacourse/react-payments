import { creditCardCompanies } from 'data/creditCard';
import { convertImage } from 'tools/image';
import * as T from 'types';
import useCreditCardForm from 'hooks/useCreditCardForm';
import {
  CreditCardCompanyImage, CreditCardCompanyInputLayout,
  CreditCardCompanyItem, CreditCardCompanyTitle
} from '../style';

interface CreditCardCompanyInputProps extends T.CreditCardInputProps {
  closeModal: () => void;
}

function CreditCardCompanyInput({ closeModal, name }: CreditCardCompanyInputProps) {
  const { creditCardForm, setCreditCardForm } = useCreditCardForm();

  const handleChangeCreditCardCompany = (companyId: string) => {
    setCreditCardForm({ ...creditCardForm, [name]: companyId });
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
