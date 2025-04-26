import styles from "./CardInputBox.module.css";
import { ReactNode, useId } from "react";

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
  const id = useId();
  const guideId = `${id}-guide`;

  return (
    <fieldset
      className={styles.container}
      aria-describedby={guideText ? guideId : undefined}
    >
      <legend className={styles.title}>{title}</legend>

      {guideText && (
        <p id={guideId} className={styles.guideText}>
          {guideText}
        </p>
      )}

      <div className={styles.inputWrapper}>{InputComponents}</div>
    </fieldset>
  );
}

export default CardInputBox;
