import { useNavigate } from 'react-router-dom';

import Header from '../../components/common/Header';
import CardRegisterButton from '../../components/CardRegisterButton';

import type { CardData } from '../../types/card';

import styles from './holdingCardsPage.module.css';
import CardItem from '../../components/CardItem';

interface Props {
  cards: CardData[];
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
            <CardItem
              key={`${card.company}-${card.owner}-${index}`}
              cardData={card}
            />
          ))}
          <CardRegisterButton onClick={handleClick} />
        </section>
      </main>
    </>
  );
};

export default HoldingCardsPage;
