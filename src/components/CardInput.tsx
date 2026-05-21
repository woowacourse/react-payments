import CardCvc from './CardCvc';
import CardNumber from './CardNumber';
import CardExpiryDate from './CardExpiryDate';
import CardCompany from './CardCompany';
import CardPassword from './CardPassword';
import type { CardFormState, CardFormHandlers } from '../hooks/useCardForm';
import type { CardFormApiError } from '../types/api';

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
  apiError?: CardFormApiError | null;
};

function ApiErrorMessage({
  apiError,
  code,
}: {
  apiError?: CardFormApiError | null;
  code: CardFormApiError['code'];
}) {
  if (!apiError || apiError.code !== code) return null;
  return (
    <p css={(theme) => ({ ...theme.typography.caption, color: theme.colors.error, margin: 0 })}>
      {apiError.message}
    </p>
  );
}

export default function CardInput({ form, handlers, completion, hasBottomAction = false, apiError }: CardInputProps) {
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
        <>
          <CardPassword cardPassword={cardPassword} setCardPassword={cardPasswordHandler} />
          <ApiErrorMessage apiError={apiError} code="password" />
        </>
      )}
      {isCardNumberComplete && isCardCompanySelected && isExpiryDateComplete && (
        <>
          <CardCvc cardCvc={cardCvc} setCardCvc={cvcHandler} />
          <ApiErrorMessage apiError={apiError} code="cvc" />
        </>
      )}
      {isCardNumberComplete && isCardCompanySelected && (
        <CardExpiryDate cardExpiry={cardExpiry} setCardExpiry={expiryHandler} />
      )}
      {isCardNumberComplete && (
        <CardCompany cardCompanyStatus={cardCompanyStatus} setCardCompany={cardCompanyHandler} />
      )}
      <CardNumber cardNumber={cardNumber} setCardNumber={cardNumberHandler} />
      <ApiErrorMessage apiError={apiError} code="cardNumbers" />
    </form>
  );
}
