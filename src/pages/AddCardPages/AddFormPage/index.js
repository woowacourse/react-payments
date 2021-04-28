import { useState } from 'react';
import { Button, Card, CreditCard, Title } from '../../../components';
import { CardInfoForm } from './CardInfoForm';
import { CardCompanySelectModal } from './CardCompanySelectModal';
import {
  CARD_NUMBER_IN_STRING_LENGTH,
  EXPIRATION_DATE_IN_STRING_FORMAT_LENGTH,
  SECURITY_CODE_LENGTH,
  PASSWORD_IN_STRING_LENGTH,
} from '../../../constants';
import './style.css';

const initialState = {
  cardCompany: { name: '', color: '' },
  cardNumber: '',
  expirationDate: 'MM/YY',
  ownerName: 'NAME',
  securityCode: '',
  password: '',
  isModalOpen: false,
};

export const AddFormPage = (props) => {
  const { setRoute } = props;
  const [cardCompany, setCardCompany] = useState(initialState.cardCompany);
  const [cardNumberInString, setCardNumberInString] = useState(initialState.cardNumber);
  const [expirationDateInString, setExpirationDateInString] = useState(initialState.expirationDate);
  const [ownerNameInString, setOwnerNameInString] = useState(initialState.ownerName);
  const [securityCodeInString, setSecurityCodeInString] = useState(initialState.securityCode);
  const [passwordInString, setPasswordInString] = useState(initialState.password);
  const [isModalOpen, setIsModalOpen] = useState(initialState.isModalOpen);
  const isFormFulFilled =
    cardNumberInString.length === CARD_NUMBER_IN_STRING_LENGTH &&
    expirationDateInString.length === EXPIRATION_DATE_IN_STRING_FORMAT_LENGTH &&
    expirationDateInString !== initialState.expirationDate &&
    ownerNameInString &&
    ownerNameInString !== initialState.ownerName &&
    securityCodeInString.length === SECURITY_CODE_LENGTH &&
    passwordInString.length === PASSWORD_IN_STRING_LENGTH;

  return (
    <div className="AddFormPage">
      <div className="AddFormPage__Title">
        <BackwardButton />
        <Title>카드 추가</Title>
      </div>
      <CreditCardPreview
        cardCompany={cardCompany}
        cardNumberInString={cardNumberInString}
        expirationDateInString={expirationDateInString}
        ownerNameInString={ownerNameInString}
      />
      <CardInfoForm
        setRoute={setRoute}
        setCardCompany={setCardCompany}
        setIsModalOpen={setIsModalOpen}
        setCardNumberInString={setCardNumberInString}
        setExpirationDateInString={setExpirationDateInString}
        setOwnerNameInString={setOwnerNameInString}
        setSecurityCodeInString={setSecurityCodeInString}
        setPasswordInString={setPasswordInString}
        isFormFulFilled={isFormFulFilled}
        cardCompany={cardCompany}
        initialState={initialState}
      />
      <CardCompanySelectModal
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        setCardCompany={setCardCompany}
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

function CreditCardPreview({
  cardCompany,
  cardNumberInString,
  expirationDateInString,
  ownerNameInString,
}) {
  return (
    <div className="CreditCardPreview">
      <Card backgroundColor={cardCompany.color} boxShadow size="medium">
        <CreditCard
          cardCompany={cardCompany.name}
          cardNumber={cardNumberInString}
          expirationDate={expirationDateInString}
          ownerName={ownerNameInString}
        />
      </Card>
    </div>
  );
}
