import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardExpiryDate from './CardExpiryDate';
import CardCompany from './CardCompany';
import CardPassword from './CardPassword';
import type { CardFormState, CardFormHandlers } from '../hooks/useCardForm';

type CardCompletion = {
  isCardNumberComplete: boolean;
  isCardCompanySelected: boolean;
  isExpiryDateComplete: boolean;
  isCvcComplete: boolean;
  isComplete: boolean;
};

type CardInputProps = {
  form: CardFormState;
  handlers: CardFormHandlers;
  completion: CardCompletion;
  hasBottomAction?: boolean;
};

export default function CardInput({ form, handlers, completion, hasBottomAction = false }: CardInputProps) {
  const { cardNumber, cardExpiry, cardCvc, cardPassword, cardCompanyStatus } = form;
  const { cardNumberHandler, expiryHandler, cvcHandler, cardPasswordHandler, cardCompanyHandler } =
    handlers;
  const { isCardNumberComplete, isCardCompanySelected, isExpiryDateComplete, isCvcComplete } =
    completion;

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
