import { Button, Card, CreditCard, Title } from '../../../components';
import { CardInfoForm } from './CardInfoForm';
import { CardCompanySelectModal } from './CardCompanySelectModal';
import {
  FORMATTED_CARD_NUMBER_LENGTH,
  FORMATTED_EXPIRATION_DATE_LENGTH,
  SECURITY_CODE_LENGTH,
  FORMATTED_PASSWORD_LENGTH,
} from '../../../constants';
import {
  getFormattedNumber,
  getFormattedExpirationDate,
  getFormattedOwnerName,
} from '../../../cardInfoFormatter';
import './style.css';

export const AddFormPage = (props) => {
  const { setRoute, initialCardInfo, cardInfo, setCardInfo, isModalOpen, setIsModalOpen } = props;
  const { number, expirationDate, ownerName, company, isOwnerNameFilled } = cardInfo;
  const formattedNumber = getFormattedNumber({ number });
  const formattedExpirationDate = getFormattedExpirationDate({ expirationDate });
  const formattedOwnerName = getFormattedOwnerName({ ownerName, isOwnerNameFilled });

  return (
    <div className="AddFormPage">
      <div className="AddFormPage__Title">
        <BackwardButton />
        <Title>카드 추가</Title>
      </div>
      <CreditCardPreview
        companyColor={company.color}
        companyName={company.name}
        formattedNumber={formattedNumber}
        formattedExpirationDate={formattedExpirationDate}
        formattedOwnerName={formattedOwnerName}
      />
      <CardInfoForm
        setRoute={setRoute}
        initialCardInfo={initialCardInfo}
        cardInfo={cardInfo}
        setCardInfo={setCardInfo}
        setIsModalOpen={setIsModalOpen}
        isFormFulFilled={isFormFulFilled({
          formattedNumber,
          formattedExpirationDate,
          formattedOwnerName,
          cardInfo,
          initialCardInfo,
        })}
      />
      <CardCompanySelectModal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setCardInfo={setCardInfo}
      />
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

function CreditCardPreview(props) {
  const {
    companyColor,
    companyName,
    formattedNumber,
    formattedExpirationDate,
    formattedOwnerName,
  } = props;

  return (
    <div className="CreditCardPreview">
      <Card backgroundColor={companyColor} boxShadow size="medium">
        <CreditCard
          company={companyName}
          cardNumber={formattedNumber}
          expirationDate={formattedExpirationDate}
          ownerName={formattedOwnerName}
        />
      </Card>
    </div>
  );
}

function isFormFulFilled({
  formattedNumber,
  formattedExpirationDate,
  formattedOwnerName,
  cardInfo,
  initialCardInfo,
}) {
  return (
    formattedNumber.length === FORMATTED_CARD_NUMBER_LENGTH &&
    formattedExpirationDate.length === FORMATTED_EXPIRATION_DATE_LENGTH &&
    formattedExpirationDate !== initialCardInfo.expirationDate &&
    formattedOwnerName &&
    formattedOwnerName !== initialCardInfo.ownerName &&
    cardInfo.securityCode.length === SECURITY_CODE_LENGTH &&
    Object.values(cardInfo.password).join('').length === FORMATTED_PASSWORD_LENGTH
  );
}
