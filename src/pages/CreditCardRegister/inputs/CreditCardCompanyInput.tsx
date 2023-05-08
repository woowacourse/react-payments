import { creditCardCompanies } from 'data/creditCard';
import { convertImage } from 'tools/image';
import useCreditCardForm from 'hooks/useCreditCardForm';
import {
  CreditCardCompanyImage,
  CreditCardCompanyInputLayout,
  CreditCardCompanyItem,
  CreditCardCompanyTitle,
} from '../style';

interface CreditCardCompanyInputProps {
  closeModal: () => void;
}

function CreditCardCompanyInput({ closeModal }: CreditCardCompanyInputProps) {
  const { updateCreditCardCompany } = useCreditCardForm();

  const handleCreditCardCompanyChange = (companyId: string) => {
    updateCreditCardCompany(companyId);
    closeModal();
  };

  return (
    <CreditCardCompanyInputLayout>
      {creditCardCompanies.map((creditCardCompany) => {
        const id = `credit-card-company-${creditCardCompany.id}`;
        return (
          <CreditCardCompanyItem
            key={id}
            data-testid={id}
            onClick={() => handleCreditCardCompanyChange(creditCardCompany.id)}
          >
            <CreditCardCompanyImage
              src={convertImage(creditCardCompany.id)}
              alt={creditCardCompany.name}
            />
            <CreditCardCompanyTitle>
              {creditCardCompany.name}
            </CreditCardCompanyTitle>
          </CreditCardCompanyItem>
        );
      })}
    </CreditCardCompanyInputLayout>
  );
}
export default CreditCardCompanyInput;
