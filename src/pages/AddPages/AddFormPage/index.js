import { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { CardInfoContext } from '../../../contexts/CardInfoContext';
import { Button, CreditCardPreview, Heading } from '../../../components';
import { CardInfoForm } from './CardInfoForm';
import { CardCompanySelectModal } from './CardCompanySelectModal';
import { getFormattedCardInfo } from '../../../cardInfoFormatter';
import { BackwardIcon } from '../../../components/BackwardIcon';
import './style.css';

export const AddFormPage = () => {
  const history = useHistory();
  const { cardInfo, company } = useContext(CardInfoContext);
  const { formattedNumber, formattedExpirationDate, formattedOwnerName } = getFormattedCardInfo({ cardInfo });
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="AddFormPage">
      <div className="AddFormPage__Heading">
        <Button className="AddFormPage__BackwardButton" onClick={() => history.goBack()}>
          <BackwardIcon />
        </Button>
        <Heading>카드 추가</Heading>
      </div>
      <CreditCardPreview
        companyColor={company.color}
        companyName={company.name}
        cardNumber={formattedNumber}
        ownerName={formattedOwnerName}
        expirationDate={formattedExpirationDate}
      />
      <CardInfoForm setIsModalOpen={setIsModalOpen} />
      <CardCompanySelectModal isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
};
