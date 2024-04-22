import { PaymentsPreview, CardNumberTextField, ExpirationDateTextField, OwnerNameTextField } from '@pages/payments';
import { useChangeCardNumber, useChangeExpirationDate, useChangeOwnerName } from '@hooks/payments';

import styles from './Payments.module.css';

const Payments: React.FC = () => {
  const { cardNumbers, cardNumberError, handleCardNumberChange } = useChangeCardNumber();
  const { expirationDate, expirationDateError, handleExpirationDateChange } = useChangeExpirationDate();
  const { ownerName, ownerNameError, handleOwnerNameChange } = useChangeOwnerName();

  return (
    <>
      <section className={styles.previewCreditCardContainer}>
        <PaymentsPreview cardNumbers={cardNumbers} expirationDate={expirationDate} ownerName={ownerName} />
      </section>

      <section className={styles.textFieldContainer}>
        <form>
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
