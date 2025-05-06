import styles from './HomePage.module.css';
import CardPreview from '../../components/CardPreview/CardPreview';
import Spacing from '../../components/Spacing/Spacing';
import { CardForm } from '../../components/CardForm/CardForm';
import { useCardNumbersFocus, useCardNumbersState, useCardNumbersValidation } from '../../hooks/useCardNumbersState';
import { useExpirationFocus, useExpirationState, useExpirationValidation } from '../../hooks/useExpirationState';
import useCompany from '../../hooks/useCompany';
import useCvc from '../../hooks/useCvc';
import usePassword from '../../hooks/usePassword';
import { CardNumberType, ExpirationKey } from '../../types';
import { isNumber } from '../../utils/isNumber';

export default function HomePage() {
  const { cardNumbers, setCardNumbers } = useCardNumbersState();
  const { inputRefs: cardInputRefs, focusIfNeeded: cardNumberFocusIfNeeded } = useCardNumbersFocus();
  const { validate: validateCardNumbers } = useCardNumbersValidation();

  const { expiration, setExpiration } = useExpirationState();
  const { expirationRef, focusIfNeeded: expirationFocusIfNeeded } = useExpirationFocus();
  const { validate: validateExpiration } = useExpirationValidation();

  const { company, handleCompanySelect } = useCompany();
  const { cvc, handleCvcChange } = useCvc();
  const { password, handlePasswordChange } = usePassword();

  const handleCardNumbersChange = (field: keyof CardNumberType, value: string) => {
    if (value !== '' && !isNumber(value)) return;

    setCardNumbers((prev) => ({
      ...prev,
      [field]: { value, errorMessage: !validateCardNumbers(value) }
    }));

    cardNumberFocusIfNeeded(field, value);
  };

  const handleExpirationChange = (field: ExpirationKey, value: string) => {
    if (!isNumber(value) && value !== '') return;

    const errorMessage = validateExpiration(field, value);
    expirationFocusIfNeeded(field, value);

    setExpiration((prev) => ({
      ...prev,
      [field]: { value, errorMessage }
    }));
  };

  const value = {
    preview: {
      cardNumbers,
      expiration,
      company
    },
    cardForm: {
      cardNumbers: {
        cardNumbers,
        onCardNumbersChange: handleCardNumbersChange,
        cardInputRefs
      },

      company: {
        company,
        handleCompanySelect
      },

      expiration: {
        expiration,
        expirationRef,
        handleExpirationChange
      },

      cvc: { cvc, handleCvcChange },

      password: { password, handlePasswordChange }
    }
  };

  return (
    <div className={styles.wrapper}>
      <CardPreview {...value.preview} />
      <Spacing size={45} />
      <CardForm {...value.cardForm} />
    </div>
  );
}
