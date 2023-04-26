import styled from 'styled-components';
import { convertImage } from 'tools/image';

/* eslint-disable @typescript-eslint/no-unused-vars */
interface CreditCardCompanyInputProps {
  closeModal: () => void;
}
const CreditCardCompanyInputLayout = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:20px;
`;

const CreditCardCompanyItem = styled.div`
    text-align: center;
`;

const creditCardCompanies = [
  { id: 'bc', company: 'BC카드' },
  { id: 'shinhan', company: '신한카드' },
  { id: 'kakao', company: '카카오뱅크' },
  { id: 'hyundai', company: '현대카드' },
  { id: 'woori', company: '우리카드' },
  { id: 'lotte', company: '롯데카드' },
  { id: 'hana', company: '하나카드' },
  { id: 'kookmin', company: '국민카드' },
];

function CreditCardCompanyInput({ closeModal }: CreditCardCompanyInputProps) {
  return (
    <CreditCardCompanyInputLayout>
      {creditCardCompanies.map((card) => (
        <CreditCardCompanyItem key={card.id} onClick={closeModal}>
          <img
            src={convertImage(card.id)}
            alt={card.company}
          />
          <div>{card.company}</div>
        </CreditCardCompanyItem>
      ))}
    </CreditCardCompanyInputLayout>
  );
}
export default CreditCardCompanyInput;
