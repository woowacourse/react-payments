import styles from './HomePage.module.css';
import CardPreview from '../../components/CardPreview/CardPreview';
import Spacing from '../../components/Spacing/Spacing';
import { CardForm } from '../../components/CardForm/CardForm';
import useCardNumbers from '../../hooks/useCardNumbers';
import useExpiration from '../../hooks/useExpiration';
import useCompany from '../../hooks/useCompany';
import usePassword from '../../hooks/usePassword';
import useCvc from '../../hooks/useCvc';

export default function HomePage() {
  const { preview, cardForm } = useValues();
  return (
    <div className={styles.wrapper}>
      <CardPreview {...preview} />
      <Spacing size={45} />
      <CardForm {...cardForm} />
    </div>
  );
}

export const useValues = () => {
  const { cardInputRefs, handleCardNumbersChange, cardNumbers, getCardNumberErrorMessage } = useCardNumbers();
  const { expiration, handleExpirationChange, expirationRef } = useExpiration();
  const { company, handleCompanySelect } = useCompany();
  const { cvc, handleCvcChange } = useCvc();
  const { password, handlePasswordChange } = usePassword();

  return {
    preview: {
      cardNumbers,
      expiration,
      company
    },
    cardForm: {
      cardNumbers: {
        cardNumbers,
        onCardNumbersChange: handleCardNumbersChange,
        cardInputRefs,
        getCardNumberErrorMessage
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
};
