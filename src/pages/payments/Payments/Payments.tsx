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
  useCheckFlag,
} from '@hooks/payments';

import styles from './Payments.module.css';

const Payments: React.FC = () => {
  const { cvcNumber, cvcNumberState, handleCVCNumberChange } = useChangeCVCNumber();
  const { ownerName, ownerNameState, handleOwnerNameChange } = useChangeOwnerName();
  const { cardIssuer, cardIssuerState, handleCardIssuerChange } = useChangeCardIssuer();
  const { cardNumbers, cardNumberState, handleCardNumberChange } = useChangeCardNumber();
  const { expirationDate, expirationDateState, handleExpirationDateChange } = useChangeExpirationDate();
  const { passwordPrefix, passwordPrefixState, handlePasswordPrefixChange } = useChangePasswordPrefix();

  const [cvcNumberFlag, ownerNameFlag, cardIssuerFlag, cardNumberFlag, expirationDateFlag] = useCheckFlag([
    cvcNumberState.isSuccess,
    ownerNameState.isSuccess,
    cardIssuerState.isSuccess,
    cardNumberState.isSuccess,
    expirationDateState.isSuccess,
  ]);

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
          {cvcNumberFlag && (
            <PasswordPrefixTextField
              passwordPrefix={passwordPrefix}
              onAddPasswordPrefix={handlePasswordPrefixChange}
              passwordPrefixState={passwordPrefixState}
            />
          )}
          {ownerNameFlag && (
            <CVCNumberTextField
              cvcNumber={cvcNumber}
              onAddCVCNumber={handleCVCNumberChange}
              cvcNumberState={cvcNumberState}
            />
          )}
          {expirationDateFlag && (
            <OwnerNameTextField
              ownerName={ownerName}
              onAddOwnerName={handleOwnerNameChange}
              ownerNameState={ownerNameState}
            />
          )}
          {cardIssuerFlag && (
            <ExpirationDateTextField
              month={expirationDate.month}
              year={expirationDate.year}
              onAddExpirationDate={handleExpirationDateChange}
              expirationDateState={expirationDateState}
            />
          )}
          {cardNumberFlag && (
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
