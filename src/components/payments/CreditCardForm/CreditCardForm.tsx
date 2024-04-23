import {
  CardNumberTextField,
  ExpirationDateTextField,
  OwnerNameTextField,
  PreviewCreditCard,
} from '@components/payments';
import CardBrandTextField from '@components/payments/@cardBrand/CardBrandTextField/CardBrandTextField';

import {
  PreviewCreditCardStyleContainer,
  TextFieldStyleContainer,
} from '@components/payments/CreditCardForm/container';

import { useChangeCardNumber, useChangeExpiration, useChangeOwnerName } from '@hooks/creditCard';
import useCardBrandDropdown from '@hooks/creditCard/useCardBrandDropdown';
import { initialExpiration } from '@hooks/creditCard/useChangeExpiration';

const CreditCardForm: React.FC = () => {
  const { cardNumbers, cardNumberError, handleCardNumberChange } = useChangeCardNumber();

  const { expiration, expirationError, handleExpirationChange } = useChangeExpiration();

  const { ownerName, ownerNameError, handleOwnerNameChange } = useChangeOwnerName();

  const { cardBrand, isOpen, handleSelectCardBrand, handleToggle } = useCardBrandDropdown();

  const isCardNumberError = cardNumberError.errorConditions.some((errorCondition) => errorCondition === true);

  return (
    <>
      <PreviewCreditCardStyleContainer>
        <PreviewCreditCard
          isDropdownOpen={isOpen}
          cardBrand={cardBrand}
          cardNumbers={cardNumbers}
          expiration={expirationError.isError === true ? initialExpiration : expiration}
          ownerName={ownerName}
        />
      </PreviewCreditCardStyleContainer>
      <TextFieldStyleContainer>
        <OwnerNameTextField
          ownerName={ownerName}
          onAddOwnerName={handleOwnerNameChange}
          ownerNameError={ownerNameError}
        />
        <ExpirationDateTextField
          month={expiration.month}
          year={expiration.year}
          onAddExpirationDate={handleExpirationChange}
          expirationError={expirationError}
        />
        <CardBrandTextField
          isOpen={isOpen}
          currentCardBrand={cardBrand}
          onSelectCardBrand={handleSelectCardBrand}
          onToggleDropdown={handleToggle}
        />
        <CardNumberTextField
          isCardNumberError={isCardNumberError}
          cardNumbers={cardNumbers}
          onAddCardNumber={handleCardNumberChange}
          cardNumberError={cardNumberError}
        />
      </TextFieldStyleContainer>
    </>
  );
};

export default CreditCardForm;
