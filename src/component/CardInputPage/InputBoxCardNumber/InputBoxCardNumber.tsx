import { ChangeEvent, useEffect, useState } from "react";
import CardNumber from "./CardNumber";

import "./inputBoxCardNumber.css";

interface Props {
  //   setCardNumber?: React.Dispatch<React.SetStateAction<number[]>>
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function InputBoxCardNumber(props: Props) {
  const { setIsComplete } = props;

  const [error, setError] = useState(true);
  return (
    <div className="input-box-card-number">
      <p>카드번호</p>
      <CardNumber setError={setError} setIsComplete={setIsComplete} />
      <p className={error ? "visible" : ""}>에러</p>
    </div>
  );
}
