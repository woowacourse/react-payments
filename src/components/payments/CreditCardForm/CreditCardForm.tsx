import {
  CardNumberTextField,
  ExpirationDateTextField,
  OwnerNameTextField,
  PreviewCreditCard,
} from '@components/payments';

import { useChangeCardNumber, useChangeExpirationDate, useChangeOwnerName } from '@hooks/creditCard';

import styles from './CreditCardForm.module.css';

const CreditCardForm: React.FC = () => {
  const { cardNumbers, cardNumberError, handleCardNumberChange } = useChangeCardNumber();
  const { expirationDate, expirationDateError, handleExpirationChange } = useChangeExpirationDate();
  const { ownerName, ownerNameError, handleOwnerNameChange } = useChangeOwnerName();

  return (
    <>
      <div className={styles.previewCreditCardContainer}>
        <PreviewCreditCard cardNumbers={cardNumbers} expirationDate={expirationDate} ownerName={ownerName} />
      </div>
      <div className={styles.textFieldContainer}>
        <CardNumberTextField
          cardNumbers={cardNumbers}
          onAddCardNumber={handleCardNumberChange}
          cardNumberError={cardNumberError}
        />
        <ExpirationDateTextField
          month={expirationDate.month}
          year={expirationDate.year}
          onAddExpirationDate={handleExpirationChange}
          expirationDateError={expirationDateError}
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
