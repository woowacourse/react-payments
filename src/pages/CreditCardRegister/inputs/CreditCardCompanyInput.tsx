import creditCardCompanies from 'assets/data/creditCardCompanies';
import styled from 'styled-components';
import { convertImage } from 'tools/image';
import * as T from 'types';

/* eslint-disable @typescript-eslint/no-unused-vars */
interface CreditCardCompanyInputProps {
  closeModal: () => void;
  name: keyof T.CreditCard;
  creditCard: T.CreditCard;
  setCreditCard: React.Dispatch<React.SetStateAction<T.CreditCard>>;

}
const CreditCardCompanyInputLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:20px;
`;

const CreditCardCompanyItem = styled.div`
    text-align: center;
    cursor:pointer;
`;

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
          <img
            src={convertImage(creditCardCompany.id)}
            alt={creditCardCompany.name}
          />
          <div>{creditCardCompany.name}</div>
        </CreditCardCompanyItem>
      ))}
    </CreditCardCompanyInputLayout>
  );
}
export default CreditCardCompanyInput;
