import cardComplete from "../../public/completeIcon.png";
import NewCard from "../../types/NewCard";
import Button from "../common/Button/Button";

import styles from "./CardComplete.module.css";

const CardComplete = ({ newCard }: { newCard: NewCard }) => {
  if (Object.keys(newCard).length === 0) {
    return <p>카드 정보가 없습니다</p>;
  }

  return (
    <div className={styles.container}>
      <img src={cardComplete} alt="카드 등록 완료" />
      <p>{newCard.cardNumbers.fourthNumber}로 시작하는</p>
      <p>{newCard.cardCompany}가 등록되었어요.</p>
      <Button link="/react-payments/" text="확인" />
    </div>
  );
};

export default CardComplete;
