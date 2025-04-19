import styles from "./CardInputBox.module.css";
import { ReactNode } from "react";

interface CardInputBoxProps {
  title: string;
  guideText?: string;
  InputComponent: ReactNode;
}

function CardInputBox({ title, guideText, InputComponent }: CardInputBoxProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {guideText && <p className={styles.guideText}>{guideText}</p>}
      {InputComponent}
    </div>
  );
}

export default CardInputBox;
