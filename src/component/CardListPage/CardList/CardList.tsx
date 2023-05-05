import CardPreview from "../../common/CardPreview";
import AddCardButton from "../AddCardButton/AddCardButton";
import { CreditCard } from "../../../type/CreditCard";
import styles from "./cardList.module.css";

interface Props {
  cardList: CreditCard[];
}

export default function CardList(props: Props) {
  const { cardList } = props;
  return (
    <div className={styles.list}>
      {cardList.map((card) => {
        const { name, nickname, company, number, date } = card;
        const key = [name, nickname, company, number[0], number[3], date].join('');

        return (
          <div key={key} className={styles.container}>
            <CardPreview card={card} />
            <p>{nickname}</p>
          </div>
        )
      })}
      {cardList.length === 0 && (
        <p className={styles.addCardExplanation}>
          새로운 카드를 등록해주세요.
        </p>
      )}
      <AddCardButton />
    </div>
  );
}
