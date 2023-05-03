import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import CardRegisterButton from '../../components/CardRegisterButton';

import { useCardsContext } from '../../domain/context/CardsContext';
import { usePreviousPath } from '../../utils/context/PreviousPathContext';

import styles from './holdingCardsPage.module.css';

const scrollToBottom = () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
};

const HoldingCardsPage = () => {
  const navigate = useNavigate();
  const { previousPath } = usePreviousPath();
  const { cards } = useCardsContext();

  const handleClick = () => {
    navigate('/card-register');
  };

  useEffect(() => {
    if (previousPath === '/waiting') {
      scrollToBottom();
    }
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="text-header">보유 카드</h1>
      </header>
      <main>
        {cards.length === 0 && (
          <h2 className={`text-subtitle ${styles.subTitle}`}>
            새로운 카드를 등록해주세요.
          </h2>
        )}
        <section className={styles.cardContainer}>
          {cards.map((card) => (
            <div key={card.id} className={styles.cardWrapper}>
              <Card
                cardCompany={card.cardCompany}
                cardNumber1={card.cardNumber1}
                cardNumber2={card.cardNumber2}
                cardNumber3={card.cardNumber3}
                cardNumber4={card.cardNumber4}
                expiredMonth={card.expiredMonth}
                expiredYear={card.expiredYear}
                owner={card.owner}
              />
              {card.nickname && (
                <span className="text-subtitle">{card.nickname}</span>
              )}
            </div>
          ))}
          <CardRegisterButton onClick={handleClick} />
        </section>
      </main>
    </div>
  );
};

export default HoldingCardsPage;
