import { useState } from "react";
import CardNumber from "./CardNumber";

import "./inputBoxCardNumber.css";

interface Props {
  setIsComplete: React.Dispatch<React.SetStateAction<boolean>>;
  setPreviewDataHandler: () => void;
}

export default function InputBoxCardNumber(props: Props) {
  const { setIsComplete, setPreviewDataHandler } = props;

  const [error, setError] = useState(true);
  return (
    <div className="input-box-card-number">
      <p>카드번호</p>
      <CardNumber 
        setError={setError}
        setIsComplete={setIsComplete} 
        setPreviewDataHandler={setPreviewDataHandler}
      />
      <p className={error ? "visible" : ""}>에러</p>
    </div>
  );
}
