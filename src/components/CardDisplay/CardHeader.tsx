import { CardNumbers } from "../../types/CardNumbers";
import styles from "./cardDisplay.module.css";
import CardNetwork from "./CardNetwork";

type CardHearProps = {
  cardNumbers: CardNumbers;
};

const CardHeader = ({ cardNumbers }: CardHearProps) => {
  return (
    <div className={styles.cardHeader}>
      <div className={styles.chip}></div>
      <CardNetwork cardNumbers={cardNumbers} />
    </div>
  );
};

export default CardHeader;
