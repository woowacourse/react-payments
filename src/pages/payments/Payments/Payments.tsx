import {
  PaymentsPreview,
  CardNumberTextField,
  ExpirationDateTextField,
  OwnerNameTextField,
  CardIssuerTextField,
} from '@pages/payments';
import { useChangeCardIssuer, useChangeCardNumber, useChangeExpirationDate, useChangeOwnerName } from '@hooks/payments';

import styles from './Payments.module.css';

const Payments: React.FC = () => {
  const { cardNumbers, cardNumberError, handleCardNumberChange } = useChangeCardNumber();
  const { expirationDate, expirationDateError, handleExpirationDateChange } = useChangeExpirationDate();
  const { ownerName, ownerNameError, handleOwnerNameChange } = useChangeOwnerName();
  const { cardIssuer, handleCardIssuerChange } = useChangeCardIssuer();

  return (
    <>
      <section className={styles.previewCreditCardContainer}>
        <PaymentsPreview cardNumbers={cardNumbers} expirationDate={expirationDate} ownerName={ownerName} />
      </section>

      <section>
        <form className={styles.paymentsForm}>
          <CardIssuerTextField value={cardIssuer} onSelectCardIssuer={handleCardIssuerChange} />
          <CardNumberTextField
            cardNumbers={cardNumbers}
            onAddCardNumber={handleCardNumberChange}
            cardNumberError={cardNumberError}
          />
          <ExpirationDateTextField
            month={expirationDate.month}
            year={expirationDate.year}
            onAddExpirationDate={handleExpirationDateChange}
            expirationDateError={expirationDateError}
          />
          <OwnerNameTextField
            ownerName={ownerName}
            onAddOwnerName={handleOwnerNameChange}
            ownerNameError={ownerNameError}
          />
        </form>
      </section>
    </>
  );
};

export default Payments;
