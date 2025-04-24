import Button from "../components/Button/Button";
import Text from "../components/Text/Text";
import type { CardKey } from "../types/cardKeyTypes";
import styles from "./ResultPage.module.css";

interface ResultPageProps {
  cardNumbers: Record<CardKey, string>;
  cardBrand: string;
  onClick: () => void;
}

export default function ResultPage({
  cardNumbers,
  cardBrand,
  onClick,
}: ResultPageProps) {
  const firstCardNumber = cardNumbers.FIRST;
  return (
    <div className={styles["result-page"]}>
      <img className={styles["check-icon"]} src="./check-icon.png" />

      <Text textType="title">{`${firstCardNumber}로 시작하는 ${cardBrand}카드가 등록되었어요.`}</Text>
      <Button text="확인" onClick={onClick} />
    </div>
  );
}
