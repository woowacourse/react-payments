import { useState } from 'react';
import AddCardForm from '../components/AddCardForm/AddCardForm';
import CardPreview from '../components/common/CardPreview/CardPreview';
import type { CardInfo } from '../types';
import Header from '../components/common/Header/Header';
import type { FormInputValueType } from '../types';
import useBooleanLocker from '../hooks/useBooleanLocker';

type CardRegistrationProps = {
  registerNewCard: (cardInfo: CardInfo) => void;
};

const CardRegistration = ({ registerNewCard }: CardRegistrationProps) => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardOwnerName, setCardOwnerName] = useState<string>('');
  const [cardExpirationDate, setCardExpirationDate] = useState<string>('');
  const { isUnlocked, setBooleanValueByIndex } = useBooleanLocker(5);

  const updateCardNumber = (newCardNumber: FormInputValueType) => {
    setCardNumber(() => newCardNumber.value);
    setBooleanValueByIndex(0, newCardNumber.isValid);
  };

  const updateCardOwnerName = (newCardOwnerName: FormInputValueType) => {
    setCardOwnerName(() => newCardOwnerName.value);
    setBooleanValueByIndex(1, newCardOwnerName.isValid);
  };

  const updateCardExpirationDate = (newCardExpirationDate: FormInputValueType) => {
    setCardExpirationDate(() => newCardExpirationDate.value);
    setBooleanValueByIndex(2, newCardExpirationDate.isValid);
  };

  const updateCardSecurityCode = (newCardSecurityCode: FormInputValueType) => {
    setBooleanValueByIndex(3, newCardSecurityCode.isValid);
  };

  const updateCardPassword = (newCardPassword: FormInputValueType) => {
    setBooleanValueByIndex(4, newCardPassword.isValid);
  };

  return (
    <>
      <Header title="카드 추가" hasBackButton={true} />
      <CardPreview cardNumber={cardNumber} cardOwnerName={cardOwnerName} cardExpirationDate={cardExpirationDate} />
      <AddCardForm
        updateCardNumber={updateCardNumber}
        updateExpirationDate={updateCardExpirationDate}
        updateCardOwnerName={updateCardOwnerName}
        updateCardSecurityCode={updateCardSecurityCode}
        updateCardPassword={updateCardPassword}
        registerNewCard={registerNewCard}
        isUnlocked={isUnlocked}
      />
    </>
  );
};

export default CardRegistration;
