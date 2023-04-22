import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import CardRegisterButton from '../../components/CardRegisterButton';

import styles from './holdingCardsPage.module.css';
import type { CardInfo } from '../../types/card';
import Header from '../../components/Header';

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
      <Header title="보유 카드" />
      <main>
        {cards.length === 0 && (
          <h2 className={`text-subtitle ${styles.subTitle}`}>
            새로운 카드를 등록해주세요.
          </h2>
        )}
        <section className={styles.cardContainer}>
          {cards.map((card, index) => (
            <Card
              cardNumber1={card.cardNumber1}
              cardNumber2={card.cardNumber2}
              cardNumber3={card.cardNumber3}
              cardNumber4={card.cardNumber4}
              expiredMonth={card.expiredMonth}
              expiredYear={card.expiredYear}
              owner={card.owner}
              key={index}
            />
          ))}
          <CardRegisterButton onClick={handleClick} />
        </section>
      </main>
    </div>
  );
};

export default HoldingCardsPage;
