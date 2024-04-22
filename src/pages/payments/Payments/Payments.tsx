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
  useChangeCardIssuer,
  useChangeCardNumber,
  useChangeExpirationDate,
  useChangeOwnerName,
  useChangePasswordPrefix,
} from '@hooks/payments';

import styles from './Payments.module.css';
import useChangeCVCNumber from '../../../hooks/payments/useChangeCVCNumber';

const Payments: React.FC = () => {
  const { cardNumbers, cardNumberError, handleCardNumberChange } = useChangeCardNumber();
  const { cvcNumber, cvcNumberError, handleCVCNumberChange } = useChangeCVCNumber();
  const { passwordPrefix, passwordPrefixError, handlePasswordPrefixChange } = useChangePasswordPrefix();
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
          <CardIssuerTextField cardIssuer={cardIssuer} onSelectCardIssuer={handleCardIssuerChange} />
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
