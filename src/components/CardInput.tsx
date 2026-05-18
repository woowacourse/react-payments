import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardExpiryDate from './CardExpiryDate';
import CardCompany from './CardCompany';
import CardPassword from './CardPassword';
import type { CardFormState, CardFormHandlers } from '../hooks/useCardForm';
import { isValidCardNumber } from '../utils/card/cardBrand';

type CardInputProps = {
  form: CardFormState;
  handlers: CardFormHandlers;
  hasBottomAction?: boolean;
};

export default function CardInput({ form, handlers, hasBottomAction = false }: CardInputProps) {
  const { cardNumber, cardExpiry, cardCvc, cardPassword, cardCompanyStatus } = form;
  const { cardNumberHandler, expiryHandler, cvcHandler, cardPasswordHandler, cardCompanyHandler } =
    handlers;
  const isCardNumberComplete =
    isValidCardNumber(cardNumber.cardNumbers, cardNumber.cardBrand) &&
    cardNumber.cardNumberErrorMode === null;
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
        <CardPassword cardPassword={cardPassword} setCardPassword={cardPasswordHandler} />
      )}
      {isCardNumberComplete && isCardCompanySelected && isExpiryDateComplete && (
        <CardCvc cardCvc={cardCvc} setCardCvc={cvcHandler} />
      )}
      {isCardNumberComplete && isCardCompanySelected && (
        <CardExpiryDate cardExpiry={cardExpiry} setCardExpiry={expiryHandler} />
      )}
      {isCardNumberComplete && (
        <CardCompany cardCompanyStatus={cardCompanyStatus} setCardCompany={cardCompanyHandler} />
      )}
      <CardNumber cardNumber={cardNumber} setCardNumber={cardNumberHandler} />
    </form>
  );
}
