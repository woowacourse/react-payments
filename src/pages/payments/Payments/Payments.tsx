import {
  PaymentsPreview,
  CardNumberTextField,
  ExpirationDateTextField,
  OwnerNameTextField,
  CardIssuerTextField,
  CVCNumberTextField,
  PasswordPrefixTextField,
} from '@pages/payments';
import {
  useChangeCardNumber,
  useChangeCVCNumber,
  useChangeOwnerName,
  useChangeCardIssuer,
  useChangeExpirationDate,
  useChangePasswordPrefix,
} from '@hooks/payments';

import styles from './Payments.module.css';

const Payments: React.FC = () => {
  const { cardIssuer, handleCardIssuerChange } = useChangeCardIssuer();
  const { cvcNumber, cvcNumberError, handleCVCNumberChange } = useChangeCVCNumber();
  const { ownerName, ownerNameError, handleOwnerNameChange } = useChangeOwnerName();
  const { cardNumbers, cardNumberError, handleCardNumberChange } = useChangeCardNumber();
  const { expirationDate, expirationDateError, handleExpirationDateChange } = useChangeExpirationDate();
  const { passwordPrefix, passwordPrefixError, handlePasswordPrefixChange } = useChangePasswordPrefix();

  return (
    <>
      <section className={styles.previewCreditCardContainer}>
        <PaymentsPreview cardNumbers={cardNumbers} expirationDate={expirationDate} ownerName={ownerName} />
      </section>

      <section>
        <form className={styles.paymentsForm}>
          <PasswordPrefixTextField
            passwordPrefix={passwordPrefix}
            onAddPasswordPrefix={handlePasswordPrefixChange}
            passwordPrefixError={passwordPrefixError}
          />
          <CVCNumberTextField
            cvcNumber={cvcNumber}
            onAddCVCNumber={handleCVCNumberChange}
            cvcNumberError={cvcNumberError}
          />
          <OwnerNameTextField
            ownerName={ownerName}
            onAddOwnerName={handleOwnerNameChange}
            ownerNameError={ownerNameError}
          />
          <ExpirationDateTextField
            month={expirationDate.month}
            year={expirationDate.year}
            onAddExpirationDate={handleExpirationDateChange}
            expirationDateError={expirationDateError}
          />
          <CardIssuerTextField cardIssuer={cardIssuer} onSelectCardIssuer={handleCardIssuerChange} />
          <CardNumberTextField
            cardNumbers={cardNumbers}
            onAddCardNumber={handleCardNumberChange}
            cardNumberError={cardNumberError}
          />
        </form>
      </section>
    </>
  );
};

export default Payments;
