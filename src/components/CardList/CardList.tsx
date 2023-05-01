/* eslint-disable react/jsx-no-useless-fragment */
import styles from "./style.module.css";
import type { Card } from "../../types";
import CardItem from "../CardItem/CardItem";

interface CardListProps {
  cardList: Card[];
}

const CardList = ({ cardList }: CardListProps) => {
  return (
    <>
      {cardList.length ? (
        <div className={styles.container}>
          {cardList.map((card) => (
            <div className={styles.item} key={card.id}>
              <CardItem
                issuer={card.issuer}
                cardNumber={card.cardNumber}
                expirationDate={card.expirationDate}
                ownerName={card.ownerName}
              />
              <h5 className={styles.cardName}>{card.cardName}</h5>
            </div>
          ))}
        </div>
      ) : (
        <h4 className={styles.emptyListMessage}>새로운 카드를 등록해주세요.</h4>
      )}
    </>
  );
};

export default CardList;
