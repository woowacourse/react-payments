import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import CardRegisterButton from '../../components/CardRegisterButton';

import { uuid } from '../../utils/uuid';
import type { CardInfo } from '../../domain/types/card';

import styles from './holdingCardsPage.module.css';

interface Props {
  cards: CardInfo[];
}

const HoldingCardsPage = ({ cards }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/card-register');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="text-title">보유 카드</h1>
      </header>
      <main>
        {cards.length === 0 && (
          <h2 className={`text-subtitle ${styles.subTitle}`}>
            새로운 카드를 등록해주세요.
          </h2>
        )}
        <section className={styles.cardContainer}>
          {cards.map((card) => (
            <Card
              key={uuid()}
              cardNumber1={card.cardNumber1}
              cardNumber2={card.cardNumber2}
              cardNumber3={card.cardNumber3}
              cardNumber4={card.cardNumber4}
              expiredMonth={card.expiredMonth}
              expiredYear={card.expiredYear}
              owner={card.owner}
            />
          ))}
          <CardRegisterButton onClick={handleClick} />
        </section>
      </main>
    </div>
  );
};

export default HoldingCardsPage;
