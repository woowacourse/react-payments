import {
  CardNumberTextField,
  ExpirationDateTextField,
  OwnerNameTextField,
  PreviewCreditCard,
} from '@components/payments';

import { useChangeCardNumber, useChangeExpiration, useChangeOwnerName } from '@hooks/creditCard';
import { initialExpiration } from '@hooks/creditCard/useChangeExpiration';

import styles from './CreditCardForm.module.css';

const CreditCardForm: React.FC = () => {
  const { cardNumbers, cardNumberError, handleCardNumberChange } = useChangeCardNumber();
  const { expiration, expirationError, handleExpirationChange } = useChangeExpiration();
  const { ownerName, ownerNameError, handleOwnerNameChange } = useChangeOwnerName();

  return (
    <>
      <div className={styles.previewCreditCardContainer}>
        <PreviewCreditCard
          cardNumbers={cardNumbers}
          expiration={expirationError.isError === true ? initialExpiration : expiration}
          ownerName={ownerName}
        />
      </div>
      <div className={styles.textFieldContainer}>
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
      </div>
    </>
  );
};

export default CreditCardForm;
