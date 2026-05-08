import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardExpiryDate from './CardExpiryDate';
import CardPassword from './CardPassword';

import type {
  CardHandler,
  CardStatus,
  CardExpiry,
  ExpireHandler,
  Cvc,
  CvcHandler,
  CardIssuerType,
  Password,
  PasswordHandler,
} from '../types/cardStausTypes';
import CardIssuer from './CardIssuer';
// import { useState } from 'react';

type CardInputProps = {
  cardStatus: CardStatus;
  setCardStatus: CardHandler;
  cardExpiry: CardExpiry;
  setCardExpiry: ExpireHandler;
  cardCvc: Cvc;
  setCardCvc: CvcHandler;
  cardPassword: Password;
  setCardPassword: PasswordHandler;
  cardIssuer: CardIssuerType | '';
  handleCardIssuer: (issuer: CardIssuerType) => void;
};

export default function CardInput({
  cardStatus,
  setCardStatus,
  cardExpiry,
  setCardExpiry,
  cardCvc,
  setCardCvc,
  cardPassword,
  setCardPassword,
  cardIssuer,
  handleCardIssuer,
}: CardInputProps) {
  // const [step, setStep] = useState(0);

  return (
    <form css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {cardStatus.cardNumbers.join('').length === 16 && (
        <CardIssuer cardIssuer={cardIssuer} handleCardIssuer={handleCardIssuer} />
      )}
      <CardNumber cardStatus={cardStatus} setCardStatus={setCardStatus} />
      <CardExpiryDate cardExpiry={cardExpiry} setCardExpiry={setCardExpiry} />
      <CardCvc cardCvc={cardCvc} setCardCvc={setCardCvc} />
      <CardPassword cardPassword={cardPassword} setCardPassword={setCardPassword} />
    </form>
  );
}
