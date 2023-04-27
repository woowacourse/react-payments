import styles from './AddCardForm.module.css';
import CardNumberInput from '../CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../ExpirationDateInput/ExpirationDateInput';
import CardOwnerName from '../CardOwnerName/CardOwnerName';
import CardSecurityCodeInput from '../CardSecurityCodeInput/CardSecurityCodeInput';
import CardPasswordInput from '../CardPasswordInput/CardPasswordInput';
import { useNavigate } from 'react-router-dom';
import type { CardInfo } from '../../types';
import Button from '../Button/Button';
import { useContext } from 'react';
import { CardInfoContext } from '../../context/CardInfoContext';

type AddCardFormProps = {
  registerNewCard: (cardInfo: CardInfo) => void;
};

const AddCardForm = ({ registerNewCard }: AddCardFormProps) => {
  const navigate = useNavigate();
  const { cardNumber, expirationDate, cardOwnerName, selectedCard } = useContext(CardInfoContext);

  const handleCardInfo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const cardInfo: CardInfo = {
      cardNumber: cardNumber,
      expirationDate: expirationDate,
      cardOwnerName: cardOwnerName,
      selectedCard: selectedCard,
    };

    registerNewCard(cardInfo);

    navigate('/card-registration-confirmation');
  };

  return (
    <form onSubmit={handleCardInfo} className={styles.container}>
      <CardNumberInput />
      <ExpirationDateInput />
      <CardOwnerName />
      <CardSecurityCodeInput />
      <CardPasswordInput />
      <div className={styles.buttonContainer}>
        <Button type="submit" className={styles.button}>
          다음
        </Button>
      </div>
    </form>
  );
};

export default AddCardForm;
