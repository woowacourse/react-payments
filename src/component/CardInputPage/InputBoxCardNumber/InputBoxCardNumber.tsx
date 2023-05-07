import { useState } from "react";
import CardNumber from "./CardNumber";

import styles from "./inputBoxCardNumber.module.css"

interface Props {
  setIsComplete: (value: boolean) => void;
}

export default function InputBoxCardNumber(props: Props) {
  const { setIsComplete } = props;

  const [hasError, setHasError] = useState(true);

  return (
    <div className={styles.inputBox}>
      <p>카드번호</p>
      <CardNumber 
        setHasError={setHasError}
        setIsComplete={setIsComplete}
      />
      <p className={hasError ? styles.visible : ""} aria-hidden={!hasError}>카드 번호는 16자리의 숫자입니다.</p>
    </div>
  );
}
