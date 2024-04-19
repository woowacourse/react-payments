import {
  CardNumberTextField,
  ExpirationDateTextField,
  OwnerNameTextField,
  PreviewCreditCard,
} from '@components/payments';

import {
  PreviewCreditCardStyleContainer,
  TextFieldStyleContainer,
} from '@components/payments/CreditCardForm/container';

import { useChangeCardNumber, useChangeExpiration, useChangeOwnerName } from '@hooks/creditCard';
import { initialExpiration } from '@hooks/creditCard/useChangeExpiration';

const CreditCardForm: React.FC = () => {
  const { cardNumbers, cardNumberError, handleCardNumberChange } = useChangeCardNumber();

  const { expiration, expirationError, handleExpirationChange } = useChangeExpiration();

  const { ownerName, ownerNameError, handleOwnerNameChange } = useChangeOwnerName();

  return (
    <>
      <PreviewCreditCardStyleContainer>
        <PreviewCreditCard
          cardNumbers={cardNumbers}
          expiration={expirationError.isError === true ? initialExpiration : expiration}
          ownerName={ownerName}
        />
      </PreviewCreditCardStyleContainer>
      <TextFieldStyleContainer>
        <CardNumberTextField
          cardNumbers={cardNumbers}
          onAddCardNumber={handleCardNumberChange}
          cardNumberError={cardNumberError}
        />
        <ExpirationDateTextField
          month={expiration.month}
          year={expiration.year}
          onAddExpirationDate={handleExpirationChange}
          expirationError={expirationError}
        />
        <OwnerNameTextField
          ownerName={ownerName}
          onAddOwnerName={handleOwnerNameChange}
          ownerNameError={ownerNameError}
        />
      </TextFieldStyleContainer>
    </>
  );
};

export default CreditCardForm;
