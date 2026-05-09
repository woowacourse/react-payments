import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardExpiryDate from './CardExpiryDate';
import CardPassword from './CardPassword';
import { getStep } from '../utils/getStep';

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
import { getCardNumberLength } from '../utils/util';

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
  const isCardNumberValid =
    cardStatus.cardBrand !== 'unknown' &&
    cardStatus.cardNumbers.join('').length === getCardNumberLength(cardStatus.cardBrand) &&
    cardStatus.cardNumberErrorMode === 'normal';
  const isCardIssuerValid = cardIssuer !== '';
  const isCardExpiryValid =
    cardExpiry.cardExpiryDate.every((date) => date.length === 2) &&
    cardExpiry.cardExpiryDateErrorMode === 'normal';
  const isCvcValid = cardCvc.cardCvc.length === 3 && cardCvc.cardCvcErrorMode === 'normal';

  const step = getStep({
    isCardNumberValid,
    isCardIssuerValid,
    isCardExpiryValid,
    isCvcValid,
  });

  return (
    <form css={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <CardNumber cardStatus={cardStatus} setCardStatus={setCardStatus} />
      {step >= 1 && <CardIssuer cardIssuer={cardIssuer} handleCardIssuer={handleCardIssuer} />}
      {step >= 2 && <CardExpiryDate cardExpiry={cardExpiry} setCardExpiry={setCardExpiry} />}
      {step >= 3 && <CardCvc cardCvc={cardCvc} setCardCvc={setCardCvc} />}
      {step >= 4 && <CardPassword cardPassword={cardPassword} setCardPassword={setCardPassword} />}
    </form>
  );
}
