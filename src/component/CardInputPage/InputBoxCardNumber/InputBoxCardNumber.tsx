import { ChangeEvent, useState } from "react";
import CardNumber from "./CardNumber";

import "./inputBoxCardNumber.css";

interface Props {
  //   setCardNumber?: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function InputBoxCardNumber() {
  const [error, setError] = useState(true);

  return (
    <div className="input-box-card-number">
      <p>카드번호</p>
      <CardNumber setError={setError} />
      <p className={error ? "visible" : ""}>에러</p>
    </div>
  );
}
