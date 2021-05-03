import { useState } from 'react';
import { Button, CreditCardPreview, Heading } from '../../../components';
import { CardInfoForm } from './CardInfoForm';
import { CardCompanySelectModal } from './CardCompanySelectModal';
import { getFormattedCardInfo } from '../../../cardInfoFormatter';
import './style.css';

export const AddFormPage = (props) => {
  const { setRoute, initialCardInfo, cardInfo, setCardInfo } = props;
  const { formattedNumber, formattedExpirationDate, formattedOwnerName } = getFormattedCardInfo({ cardInfo });
  const { company } = cardInfo;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="AddFormPage">
      <div className="AddFormPage__Heading">
        <BackwardButton />
        <Heading>카드 추가</Heading>
      </div>
      <CreditCardPreview
        companyColor={company.color}
        companyName={company.name}
        cardNumber={formattedNumber}
        ownerName={formattedOwnerName}
        expirationDate={formattedExpirationDate}
      />
      <CardInfoForm
        setRoute={setRoute}
        initialCardInfo={initialCardInfo}
        cardInfo={cardInfo}
        setCardInfo={setCardInfo}
        setIsModalOpen={setIsModalOpen}
      />
      <CardCompanySelectModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setCardInfo={setCardInfo} />
    </div>
  );
};

function BackwardButton() {
  const size = 16;
  const color = '#525252';

  return (
    <Button theme="backward" onClick={() => {}}>
      <svg viewBox={`0 0 ${size} ${size}`} height={size} width={size} fill="none">
        <path d="M8.30426 1L1.36476 8.78658L9.15134 15.7261" stroke={color} strokeWidth="1.5" />
      </svg>
    </Button>
  );
}
