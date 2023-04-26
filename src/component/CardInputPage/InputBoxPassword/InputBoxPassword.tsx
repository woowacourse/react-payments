import { useState } from "react";
import CardPassword from "./CardPassword";

import styles from "./inputBoxPassword.module.css";

interface Props {
  setIsComplete: (value: boolean) => void;
}

export default function InputBoxPassword(props: Props) {
  const { setIsComplete } = props;

  const [error, setError] = useState(true);

  return (
    <div className={styles.inputBox}>
      <p>카드 비밀번호</p>
      <CardPassword setError={setError} setIsComplete={setIsComplete} />
      <p className={error ? styles.visible : ""}>카드 비밀번호 앞 두 자리를 입력해 주세요!!!</p>
    </div>
  );
}
