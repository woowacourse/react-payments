import styles from "./CardInputBox.module.css";
import { ReactNode } from "react";

interface CardInputBoxProps {
  title: string;
  guideText?: string;
  InputComponents: ReactNode;
}

function CardInputBox({
  title,
  guideText,
  InputComponents,
}: CardInputBoxProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      {guideText && <p className={styles.guideText}>{guideText}</p>}
      {InputComponents}
    </div>
  );
}

export default CardInputBox;
