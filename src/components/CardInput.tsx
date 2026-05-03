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
} from '../types/cardStausTypes';

type CardInputProps = {
  cardStatus: CardStatus;
  setCardStatus: CardHandler;
  cardExpiry: CardExpiry;
  setCardExpiry: ExpireHandler;
  cardCvc: Cvc;
  setCardCvc: CvcHandler;
};

export default function CardInput({
  cardStatus,
  setCardStatus,
  cardExpiry,
  setCardExpiry,
  cardCvc,
  setCardCvc,
}: CardInputProps) {
  return (
    <form css={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <CardNumber cardStatus={cardStatus} setCardStatus={setCardStatus} />
      <CardExpiryDate cardExpiry={cardExpiry} setCardExpiry={setCardExpiry} />
      <CardCvc cardCvc={cardCvc} setCardCvc={setCardCvc} />
    </form>
  );
}
