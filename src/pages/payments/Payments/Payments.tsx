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
  const { cardIssuer, cardIssuerState, handleCardIssuerChange } = useChangeCardIssuer();
  const { cvcNumber, cvcNumberState, handleCVCNumberChange } = useChangeCVCNumber();
  const { ownerName, ownerNameState, handleOwnerNameChange } = useChangeOwnerName();
  const { cardNumbers, cardNumberState, handleCardNumberChange } = useChangeCardNumber();
  const { expirationDate, expirationDateState, handleExpirationDateChange } = useChangeExpirationDate();
  const { passwordPrefix, passwordPrefixState, handlePasswordPrefixChange } = useChangePasswordPrefix();

  return (
    <>
      <section className={styles.previewCreditCardContainer}>
        <PaymentsPreview
          cardIssuer={cardIssuer}
          cardNumbers={cardNumbers}
          cvcNumber={cvcNumber}
          expirationDate={expirationDate}
          ownerName={ownerName}
        />
      </section>

      <section>
        <form className={styles.paymentsForm}>
          {cvcNumberState.isSuccess && (
            <PasswordPrefixTextField
              passwordPrefix={passwordPrefix}
              onAddPasswordPrefix={handlePasswordPrefixChange}
              passwordPrefixState={passwordPrefixState}
            />
          )}
          {ownerNameState.isSuccess && (
            <CVCNumberTextField
              cvcNumber={cvcNumber}
              onAddCVCNumber={handleCVCNumberChange}
              cvcNumberState={cvcNumberState}
            />
          )}
          {expirationDateState.isSuccess && (
            <OwnerNameTextField
              ownerName={ownerName}
              onAddOwnerName={handleOwnerNameChange}
              ownerNameState={ownerNameState}
            />
          )}
          {cardIssuerState.isSuccess && (
            <ExpirationDateTextField
              month={expirationDate.month}
              year={expirationDate.year}
              onAddExpirationDate={handleExpirationDateChange}
              expirationDateState={expirationDateState}
            />
          )}
          {cardNumberState.isSuccess && (
            <CardIssuerTextField cardIssuer={cardIssuer} onSelectCardIssuer={handleCardIssuerChange} />
          )}
          <CardNumberTextField
            cardNumbers={cardNumbers}
            onAddCardNumber={handleCardNumberChange}
            cardNumberState={cardNumberState}
          />
        </form>
      </section>
    </>
  );
};

export default Payments;
