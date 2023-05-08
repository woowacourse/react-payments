import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import CardRegisterButton from '../../components/CardRegisterButton';

import { useCardsContext } from '../../domain/context/CardsContext';
import { scrollToBottom } from '../../utils/scrollToBottom';

import styles from './holdingCardsPage.module.css';

const HoldingCardsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cards } = useCardsContext();
  const previousPath = location.state?.from?.pathname;

  const handleClick = () => {
    navigate('/card-register');
  };

  useEffect(() => {
    if (previousPath.includes('/complete')) {
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
              <Card {...card} />
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
