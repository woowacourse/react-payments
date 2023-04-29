import { useNavigate } from 'react-router-dom';

import Header from '../../components/common/Header';
import CardItem from '../../components/CardItem';
import CardRegisterButton from '../../components/CardRegisterButton';

import type { CardData } from '../../types/card';

import styles from './holdingCardsPage.module.css';

interface Props {
  cards: CardData[];
}

const HoldingCardsPage = ({ cards }: Props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/card-info-register');
  };

  return (
    <>
      <Header title="보유 카드" />
      <main>
        {cards.length === 0 && (
          <h2 className={styles.subTitle}>새로운 카드를 등록해주세요.</h2>
        )}
        <section className={styles.cardContainer}>
          {cards.length > 0 && (
            <ul className={styles.cardList}>
              {cards.map((card, index) => (
                <li
                  key={`${card.number.first}-${index}`}
                  className={styles.cardItem}
                >
                  <CardItem cardData={card} />
                  <p>{card.name}</p>
                </li>
              ))}
            </ul>
          )}
          <CardRegisterButton onClick={handleClick} />
        </section>
      </main>
    </>
  );
};

export default HoldingCardsPage;
