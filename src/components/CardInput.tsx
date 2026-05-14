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
import Button from './common/Button';

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
  step: number;
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void;
  isFormValid: boolean;
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
  step,
  handleSubmit,
  isFormValid,
}: CardInputProps) {
  return (
    <form onSubmit={handleSubmit} css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {step >= 4 && <CardPassword cardPassword={cardPassword} setCardPassword={setCardPassword} />}
      {step >= 3 && <CardCvc cardCvc={cardCvc} setCardCvc={setCardCvc} />}
      {step >= 2 && <CardExpiryDate cardExpiry={cardExpiry} setCardExpiry={setCardExpiry} />}
      {step >= 1 && <CardIssuer cardIssuer={cardIssuer} handleCardIssuer={handleCardIssuer} />}
      <CardNumber cardStatus={cardStatus} setCardStatus={setCardStatus} />
      {isFormValid && <Button type="submit">확인</Button>}
    </form>
  );
}
