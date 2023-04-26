import { useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import CardRegisterButton from '../../components/CardRegisterButton';
import Header from '../../components/common/Header';

import type { CardInfo } from '../../types/card';

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
    <>
      <Header title="보유 카드" />
      <main>
        {cards.length === 0 && (
          <h2 className={styles.subTitle}>새로운 카드를 등록해주세요.</h2>
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
    </>
  );
};

export default HoldingCardsPage;
