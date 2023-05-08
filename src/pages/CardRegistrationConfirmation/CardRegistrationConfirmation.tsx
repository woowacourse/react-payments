import CardPreview from '../../components/CardPreview/CardPreview';
import styles from './CardRegistrationConfirmation.module.css';
import CardNicknameInput from '../../components/CardNickname/CardNicknameInput';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { CardInfo } from '../../types';
import { useCardStore } from '../../hook/useCardState';
import { useEffect, useState } from 'react';
import Spinner from '../../components/Spinner/Spinner';
import useResetCardState from '../../hook/useResetCardState';

type CardRegistrationConfirmationProps = {
  registerNewCard: (cardInfo: CardInfo) => void;
};

const CardRegistrationConfirmation = ({ registerNewCard }: CardRegistrationConfirmationProps) => {
  const [showComponent, setShowComponent] = useState(true);
  const resetCardState = useResetCardState();
  const navigate = useNavigate();
  const { get } = useCardStore();
  const { cardNumber, cardOwnerName, expirationDate, selectedCard } = get();

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(false);
    }, 3000);
  }, []);

  if (showComponent) {
    return <Spinner />;
  }

  const handleCardInfo = () => {
    const cardInfo: CardInfo = { ...get() };

    registerNewCard(cardInfo);

    resetCardState();

    navigate('/');
  };

  return (
    <section className={styles.container}>
      <article className={styles.box}>
        <h2 className={styles.registrationLetter}>카드등록이 완료되었습니다.</h2>
        <CardPreview
          cardNumber={cardNumber}
          cardOwnerName={cardOwnerName}
          expirationDate={expirationDate}
          selectedCard={selectedCard}
        />
        <CardNicknameInput />
        <Button type="button" className={styles.confirmButton} onClick={handleCardInfo}>
          확인
        </Button>
      </article>
    </section>
  );
};

export default CardRegistrationConfirmation;
