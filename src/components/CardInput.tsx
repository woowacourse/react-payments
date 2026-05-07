import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardExpiryDate from './CardExpiryDate';
import type {
  CardHandler,
  CardStatus,
  CardExpiry,
  ExpireHandler,
  Cvc,
  CvcHandler,
  CardIssuerType,
} from '../types/cardStausTypes';
import CardIssuer from './CardIssuer';

type CardInputProps = {
  cardStatus: CardStatus;
  setCardStatus: CardHandler;
  cardExpiry: CardExpiry;
  setCardExpiry: ExpireHandler;
  cardCvc: Cvc;
  setCardCvc: CvcHandler;
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
  cardIssuer,
  handleCardIssuer,
}: CardInputProps) {
  return (
    <form css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {cardStatus.cardNumbers.join('').length === 16 && (
        <CardIssuer cardIssuer={cardIssuer} handleCardIssuer={handleCardIssuer} />
      )}
      <CardNumber cardStatus={cardStatus} setCardStatus={setCardStatus} />
      <CardExpiryDate cardExpiry={cardExpiry} setCardExpiry={setCardExpiry} />
      <CardCvc cardCvc={cardCvc} setCardCvc={setCardCvc} />
    </form>
  );
}
