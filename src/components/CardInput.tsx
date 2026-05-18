import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardExpiryDate from './CardExpiryDate';
import CardCompany from './CardCompany';
import CardPassword from './CardPassword';
import type {
  CardHandler,
  CardStatus,
  CardExpiry,
  ExpireHandler,
  Cvc,
  CvcHandler,
  CardCompanyHandler,
  CardCompanyStatus,
  CardPassword as CardPasswordType,
  CardPasswordHandler,
} from '../types/cardStausTypes';
import { isValidCardNumber } from '../utils/card/cardBrand';

type CardInputProps = {
  cardStatus: CardStatus;
  setCardStatus: CardHandler;
  cardExpiry: CardExpiry;
  setCardExpiry: ExpireHandler;
  cardCvc: Cvc;
  setCardCvc: CvcHandler;
  cardPassword: CardPasswordType;
  setCardPassword: CardPasswordHandler;
  cardCompanyStatus: CardCompanyStatus;
  setCardCompany: CardCompanyHandler;
  hasBottomAction?: boolean;
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
  cardCompanyStatus,
  setCardCompany,
  hasBottomAction = false,
}: CardInputProps) {
  const isCardNumberComplete =
    isValidCardNumber(cardStatus.cardNumbers, cardStatus.cardBrand) &&
    cardStatus.cardNumberErrorMode === null;
  const isCardCompanySelected = cardCompanyStatus.cardCompany !== '';
  const isExpiryDateComplete =
    cardExpiry.cardExpiryDate.every((date) => date.length === 2) &&
    cardExpiry.cardExpiryDateErrorMode === null;
  const isCvcComplete = cardCvc.cardCvc.length === 3 && cardCvc.cardCvcErrorMode === null;

  return (
    <form
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        paddingBottom: hasBottomAction ? '64px' : 0,
      }}
    >
      {isCardNumberComplete && isCardCompanySelected && isExpiryDateComplete && isCvcComplete && (
        <CardPassword cardPassword={cardPassword} setCardPassword={setCardPassword} />
      )}
      {isCardNumberComplete && isCardCompanySelected && isExpiryDateComplete && (
        <CardCvc cardCvc={cardCvc} setCardCvc={setCardCvc} />
      )}
      {isCardNumberComplete && isCardCompanySelected && (
        <CardExpiryDate cardExpiry={cardExpiry} setCardExpiry={setCardExpiry} />
      )}
      {isCardNumberComplete && (
        <CardCompany cardCompanyStatus={cardCompanyStatus} setCardCompany={setCardCompany} />
      )}
      <CardNumber cardStatus={cardStatus} setCardStatus={setCardStatus} />
    </form>
  );
}
