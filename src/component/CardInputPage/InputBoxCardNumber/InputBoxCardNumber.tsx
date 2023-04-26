import { useState } from "react";
import CardNumber from "./CardNumber";

import styles from "./inputBoxCardNumber.module.css"

interface Props {
  setIsComplete: (value: boolean) => void;
  setPreviewDataHandler: () => void;
}

export default function InputBoxCardNumber(props: Props) {
  const { setIsComplete, setPreviewDataHandler } = props;

  const [error, setError] = useState(true);
  return (
    <div className={styles.inputBox}>
      <p>카드번호</p>
      <CardNumber 
        setError={setError}
        setIsComplete={setIsComplete} 
        setPreviewDataHandler={setPreviewDataHandler}
      />
      <p className={error ? styles.visible : ""}>16자리의 숫자를 입력해 주세요!!!</p>
    </div>
  );
}
