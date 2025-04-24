import cardComplete from "../../public/completeIcon.png";
import Button from "../common/Button/Button";

import styles from "./CardComplete.module.css";

const CardComplete = ({ newCard }) => {
  return (
    <div className={styles.container}>
      <img src={cardComplete} alt="카드 등록 완료" />
      <p>{newCard.cardNumbers.fourthNumber}로 시작하는</p>
      <p>{newCard.cardCompany}가 등록되었어요.</p>
      <Button text="확인" />
    </div>
  );
};

export default CardComplete;
