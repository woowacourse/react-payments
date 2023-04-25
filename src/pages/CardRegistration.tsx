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

  const updateCardNumber = useCallback(
    (newCardNumber: FormInputValueType) => {
      setCardNumber(() => newCardNumber.value);
      setBooleanValueByIndex(0, newCardNumber.isValid);
    },
    [setBooleanValueByIndex]
  );

  const updateCardOwnerName = useCallback(
    (newCardOwnerName: FormInputValueType) => {
      setCardOwnerName(() => newCardOwnerName.value);
      setBooleanValueByIndex(1, newCardOwnerName.isValid);
    },
    [setBooleanValueByIndex]
  );

  const updateCardExpirationDate = useCallback(
    (newCardExpirationDate: FormInputValueType) => {
      setCardExpirationDate(() => newCardExpirationDate.value);
      setBooleanValueByIndex(2, newCardExpirationDate.isValid);
    },
    [setBooleanValueByIndex]
  );

  const updateCardSecurityCode = useCallback(
    (newCardSecurityCode: FormInputValueType) => {
      setBooleanValueByIndex(3, newCardSecurityCode.isValid);
    },
    [setBooleanValueByIndex]
  );

  const updateCardPassword = useCallback(
    (newCardPassword: FormInputValueType) => {
      setBooleanValueByIndex(4, newCardPassword.isValid);
    },
    [setBooleanValueByIndex]
  );

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
