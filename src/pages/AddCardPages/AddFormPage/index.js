import { useState } from 'react';
import { BackwardButton, CreditCardPreview, Heading } from '../../../components';
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
